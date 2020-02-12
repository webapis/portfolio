import React from 'react';
import CodeLabComponent from './CodeLabComponent';

const VideoChat = () => (
  <a
    target='blank'
    href='https://codesandbox.io/s/video-chat-webrtc-m2grv?fontsize=14&hidenavigation=1&theme=dark'
  >
    <img
      alt='Edit Video Chat (WebRTC)'
      src='https://codesandbox.io/static/img/play-codesandbox.svg'
    />
  </a>
);

const TextChat = () => (
  <a
    target='blank'
    href='https://codesandbox.io/s/text-chat-webrtc-mq4gu?fontsize=14&hidenavigation=1&theme=dark'
  >
    <img
      alt='Edit Text Chat (WebRTC)'
      src='https://codesandbox.io/static/img/play-codesandbox.svg'
    />
  </a>
);

const FileTransfer = () => (
  <a
    target='blank'
    href='https://codesandbox.io/s/file-transfer-webrtc-ss4yz?fontsize=14&hidenavigation=1&theme=dark'
  >
    <img
      alt='Edit File Transfer (WebRTC)'
      src='https://codesandbox.io/static/img/play-codesandbox.svg'
    />
  </a>
);

const VideoConference = () => (
  <a
    target='blank'
    href='https://codesandbox.io/s/video-conference-webrtc-wr4ye?fontsize=14&hidenavigation=1&theme=dark'
  >
    <img
      alt='Edit Video Conference (WebRTC)'
      src='https://codesandbox.io/static/img/play-codesandbox.svg'
    />
  </a>
);

export default function CodeLabContainer() {
  return (
    <div className='codelab-container' >
      <CodeLabComponent
        description='Peer to Peer Video Chat using WebRTC RTCPeerConnection'
        title='Video Chat'
        sandbox={<VideoChat />}
      />
      <CodeLabComponent
        title='Text Chat'
        description='Peer to Peer Text  Messaging  using WebRTC Datachannel'
        sandbox={<TextChat />}
      />
      <CodeLabComponent
        title='File Transfer'
        description='Peer to Peer File Transfer using WebRCT Datachannel'
        sandbox={<FileTransfer />}
      />
      <CodeLabComponent
        title='Video Conference'
        description='Video Conference with multiple partitipants using WebRTC with mesh connection type'
        sandbox={<VideoConference />}
      />
    </div>
  );
}
