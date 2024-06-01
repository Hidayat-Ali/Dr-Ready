import { CopyToClipboard } from 'react-copy-to-clipboard'
import Peer from 'simple-peer'
import io from 'socket.io-client'
import React, { useEffect, useRef, useState } from 'react'
import CIcon from '@coreui/icons-react'
import { cibCassandra, cilPhone } from '@coreui/icons'
import { CButton } from '@coreui/react'

const Video = () => {
  const [me, setMe] = useState('')
  const [stream, setStream] = useState(null)
  const [receivingCall, setReceivingCall] = useState(false)
  const [caller, setCaller] = useState('')
  const [callerSignal, setCallerSignal] = useState(null)
  const [callAccepted, setCallAccepted] = useState(false)
  const [idToCall, setIdToCall] = useState('')
  const [callEnded, setCallEnded] = useState(false)
  const [name, setName] = useState('')
  const myVideo = useRef()
  const userVideo = useRef(null)
  const connectionRef = useRef(null)
  const socket = io.connect('http://localhost:5000')
  useEffect(() => {
    navigator.mediaDevices
      .getUserMedia({ video: true, audio: true })
      .then((stream) => {
        setStream(stream)
        if (myVideo.current) {
          myVideo.current.srcObject = stream
        }
      })
      .catch((error) => {
        console.error('Error accessing media devices:', error)
      })

    socket.on('me', (id) => {
      setMe(id)
      console.log('Connected with socket ID:', id)
    })

    socket.on('callUser', (data) => {
      try {
        console.log('Connected with socket')
        setReceivingCall(true)
        setCaller(data.from)
        setName(data.name)
        setCallerSignal(data.signal)
      } catch (error) {
        console.error('Error handling callUser event:', error)
      }
    })
  }, [])
  // const callUser = async (id) => {
  //   console.log('Calling user with ID:', id)

  //   if (stream) {
  //     console.log('Before Peer creation:', stream)
  //     const peer = new Peer({ initiator: true, stream: stream, trickle: false })
  //     console.log('After Peer creation:', peer)
  //   } else {
  //     console.error('Stream is not available here.')
  //   }
  //   console.log(stream, 'this is the stream from backend server')
  // }
  const callUser = (id) => {
    const peer = new Peer({
      initiator: true,
      trickle: false,
      stream: stream,
    })
    peer.on('signal', (data) => {
      socket.emit('callUser', {
        userToCall: id,
        signalData: data,
        from: me,
        name: name,
      })
    })
    peer.on('stream', (stream) => {
      userVideo.current.srcObject = stream
    })
    socket.on('callAccepted', (signal) => {
      setCallAccepted(true)
      peer.signal(signal)
    })

    connectionRef.current = peer
  }

  const answerCall = async () => {
    setCallAccepted(true)

    if (!stream) {
      console.error('Stream is not available.')
      return
    }

    try {
      const peer = new Peer({
        initiator: false,
        trickle: false,
        stream: stream,
      })

      peer.on('signal', (data) => {
        console.log('Answering call with signal:', data)
        socket.emit('answerCall', { signal: data, to: caller })
      })

      peer.on('stream', (stream) => {
        console.log('Receiving stream:', stream)
        if (userVideo.current) {
          userVideo.current.srcObject = stream
        }
      })

      peer.on('error', (err) => {
        console.error('Peer error:', err)
      })

      peer.signal(callerSignal)
      connectionRef.current = peer
    } catch (err) {
      console.error('Error answering call:', err)
    }
  }

  const leaveCall = () => {
    setCallEnded(true)
    if (connectionRef.current) {
      connectionRef.current.destroy()
    }
  }

  return (
    <>
      <h1 style={{ textAlign: 'center', color: '#fff' }}>Zoomish</h1>
      <div className="container">
        <div className="video-container">
          <div className="video">
            {console.log('video stream', stream)}

            <video playsInline muted ref={myVideo} autoPlay style={{ width: '300px' }} />
          </div>
          <div className="video">
            {callAccepted && !callEnded ? (
              <video playsInline ref={userVideo} muted autoPlay style={{ width: '300px' }} />
            ) : null}
          </div>
        </div>
        <div className="myId">
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={{ marginBottom: '20px', padding: '10px', width: '100%' }}
          />
          <CopyToClipboard text={me} style={{ marginBottom: '2rem' }}>
            <CButton color="primary">
              <CIcon icon={cibCassandra} />
              Copy ID
            </CButton>
          </CopyToClipboard>

          <input
            type="text"
            placeholder="ID to call"
            value={idToCall}
            onChange={(e) => setIdToCall(e.target.value)}
            style={{ marginBottom: '20px', padding: '10px', width: '100%' }}
          />
          <div className="call-button">
            {callAccepted && !callEnded ? (
              <CButton color="secondary" onClick={leaveCall}>
                End Call
              </CButton>
            ) : (
              <CButton color="primary" aria-label="call" onClick={() => callUser(idToCall)}>
                <CIcon icon={cilPhone} />
              </CButton>
            )}
            {idToCall}
          </div>
        </div>
        <div>
          {receivingCall && !callAccepted ? (
            <div className="caller">
              <h1>{name} is calling...</h1>
              <CButton color="primary" onClick={answerCall}>
                Answer
              </CButton>
            </div>
          ) : null}
        </div>
      </div>
    </>
  )
}

export default Video
