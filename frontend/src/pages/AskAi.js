import React, { useState } from 'react'
import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css'
import {MainContainer, ChatContainer, MessageList,Message,MessageInput,TypingIndicator} from '@chatscope/chat-ui-kit-react'
// import { Directions } from '@mui/icons-material'
const API_KEY='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';



function AskAi() {
    const [typing,setTyping]=useState(false)
    const[messages,setMessages]=useState([
        {
            message:'Hello! Welcome to SideGigs. How may I assist you today?',
            sender:'ChatGPT',

        }
    ])

    const handleSend = async  (message)=>{
        const newMessage ={
            message:message,
            sender:'user',
            direction:'outgoing'
        }

        const newMessages =[...messages,newMessage]
        setMessages(newMessages)
        setTyping(true)
        await ProcessMessageToChatGPT(newMessages)
    }

async function ProcessMessageToChatGPT(chatMessages){
    let apiMessage = chatMessages.map((messageObject)=>{
        let role='';
        if(messageObject.sender==='ChatGPT'){
            role='assistant'
        }else{
            role='user'
        }
        return {role:role,content:messageObject.message}
    })

    const systemMessage={
        role:'system',
        content:'Speak and Welcome the user as a virtual assistant of Epicmploy, a freelance portal, help them with everything related to freelancing,increasing their reach and upskilling'
    }

    const apiRequestBody={
        'model':'gpt-3.5-turbo',
        'messages':[
            systemMessage,
            ...apiMessage
        ]
    }

    await fetch('https://api.openai.com/v1/chat/completions',{
        method:'POST',
        headers:{
            'Authorization':'Bearer '+API_KEY,
            'Content-Type':'application/json'
        },
        body:JSON.stringify(apiRequestBody)
    }).then((data)=>{
        console.log(data)
        return data.json();
    }).then((data)=>{
        console.log(data.choices[0].message.content);
        setMessages(
            [...chatMessages,{
                message:data.choices[0].message.content,
                sender:'ChatGPT'
            }]
            );
        setTyping(false)
    })
}

  return (
    <div>
    <div style={{height:'86vh',width:'100%'}}>
        <MainContainer>
            <ChatContainer>
                <MessageList typingIndicator={typing? <TypingIndicator content='SideGigs AI is typing'/>:null}>
                    {messages.map((message,i)=>{
                        return <Message key={i} model={message}></Message>
                    })}
                </MessageList>
                <MessageInput placeholder='Type Message Here' onSend={handleSend} ></MessageInput>
            </ChatContainer>
        </MainContainer>
    </div>
    </div>
  )
}

export default AskAi