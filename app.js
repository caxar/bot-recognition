const voice = document.querySelector('.voiceBtn'),
      chatImg = document.querySelector('.chat-img');
      
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recorder = new SpeechRecognition;

function humantText(text) {
    const chatContainer = document.createElement('div');
    chatContainer.classList.add('chat-container');

    chatContainer.innerHTML = `<img src="person.png" class="chat-img" alt="">`;

    const voiceText = document.createElement('p');
    voiceText.classList.add('.chat-text');

    const speakText = document.createTextNode(text);

    voiceText.appendChild(speakText);
    chatContainer.appendChild(voiceText);

    return chatContainer;
}

function botText(text) {
    const chatContainerBot = document.createElement('div');
    chatContainerBot.classList.add('chat-container');
    chatContainerBot.classList.add('darker');

    chatContainerBot.innerHTML = `<img src="bot.png" class="chat-img" alt="">`;

    const voiceTextBot = document.createElement('p');
    voiceTextBot.classList.add('.chat-text');

    const speakTextBot = document.createTextNode(text);

    voiceTextBot.appendChild(speakTextBot);
    chatContainerBot.appendChild(voiceTextBot);

    return chatContainerBot;
}



function botVoice(message) {
    const speech = new SpeechSynthesisUtterance();
    speech.pitch = 1.5;
    speech.rate = 1.5;
    speech.volume = 1.5;
    speech.text = 'Извините, я не поняла. Попробуйте снова';

    if(message.includes('Привет Маруся')) {
        speech.text = 'Привет, как дела? ';
    }

    if(message.includes('Привет') && !message.includes('Маруся')) {
        speech.text = 'Обратитесь по имени. Меня зовут Маруся';
    }


    if(message.includes('нормально') || message.includes('хорошо')) {
        speech.text = 'Рада слышать что все хорошо. Если интересно у меня тоже все нормально. Чем могу помочь?';
    }

    if(message.includes('не очень') || message.includes('плохо')) {
        speech.text = 'Ничего, все скоро будет хорошо.';
    }

    if(message.includes('погода')) {
        speech.text = 'Скажи свой город, что бы я могла точно сказать погоду.';
    }

    if(message.includes('Казань')) {
        speech.text = 'Красивый город, там сейчас 15 градусов, солнечно, без осадков. Чем могу ещё помочь?';
    }

    if(message.includes('Мальта')) {
        speech.text = 'Красивый город, там сейчас 36 градусов, солнечно, ветренно. Чем могу ещё помочь?';
    }

    if(message.includes('пока всё') || message.includes('ничего не надо')) {
        speech.text = 'Рада была помочь, обращайся.';
    }

    if(message.includes('Пока') || message.includes('пока')) {
        speech.text = 'Пока, спасибо что не забываешь.';
    }

    window.speechSynthesis.speak(speech);

    const bodyContainer = document.getElementById('chatBox');
    bodyContainer.appendChild(botText(speech.text));
}


recorder.onstart = () => {
    console.log('active voice');
}

recorder.onresult = (e) => {
    const resultIndex = e.resultIndex;
    const transcript = e.results[resultIndex][0].transcript;

    const bodyContainer = document.getElementById('chatBox');
    bodyContainer.appendChild(humantText(transcript));

    botVoice(transcript);
}

voice.addEventListener('click', () => {
    recorder.start();
})





















// const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
// const recorder = new SpeechRecognition;

// function humanText(text) {
//     const chatContainer = document.createElement('div');
//     chatContainer.classList.add('chat-container');

//     const voiceText = document.createElement('p');
//     voiceText.classList.add('voice2text');

//     const textNode = document.createTextNode(text);
//     voiceText.appendChild(textNode);

//     chatContainer.appendChild(voiceText);
//     return chatContainer;
// }

// function botText(text) {
//     const chatContainerBot = document.createElement('div');
//     chatContainerBot.classList.add('chat-container');
//     chatContainerBot.classList.add('darker');

//     const voiceTextBot = document.createElement('p');
//     voiceTextBot.classList.add('voice2text');

//     const textNodeBot = document.createTextNode(text);
//     voiceTextBot.appendChild(textNodeBot);

//     chatContainerBot.appendChild(voiceTextBot);
//     return chatContainerBot;
// }

// function botVoice(message) {
//     const speech = new SpeechSynthesisUtterance();
//     speech.text = 'Извините, я не поняла. Попробуйте снова';

//     if(message.includes('Привет')) {
//         speech.text = 'Привет, рада тебя слышать';
//     }

//     if(message.includes('Как дела')) {
//         speech.text = 'Все хорошо. А ты как?';
//     }
    
//     if(message.includes('хорошо')) {
//         speech.text = 'Я рада это слышать. Чем могу помочь?';
//     }

//     if(message.includes('погода')) {
//         speech.text = 'Конечно. Скажи свой город?';
//     }

//     if(message.includes('Казань')) {
//         speech.text = 'Сегодня там 32 градуса, без осадков, солнечно';
//     }

//     if(message.includes('Расскажи что-то ещё')) {
//     speech.text = 'Хорошо расскажу. Сегодня я говорила сама с собой. Ха-ха Ха-ха Ха-ха.';
//     }

//     if(message.includes('пока') || message.includes('Пока')) {
//         speech.text = 'Пока удачи, рада была помочь';
//         }
    
//     if(message.includes('сука') || message.includes('жопа') || message.includes('блядь')
//         || message.includes('лох') || message.includes('чмо') || message.includes('пидр')) {
//             speech.text = 'Не ругайся, это очень плохо';
//     }




//     speech.volume = 1;
//     speech.rate = 1;
//     speech.pitch = 1.5;
//     window.speechSynthesis.speak(speech);

//     const mainContainer = document.getElementById('container');
//     mainContainer.appendChild(botText(speech.text));
// }

// recorder.onstart = () => {
//     console.log('active voice');
// }

// recorder.onresult = (e) => {
//     const resultIndex = e.resultIndex;
//     const transcript = e.results[resultIndex][0].transcript;
//     const mainContainer = document.getElementById('container');
//     mainContainer.appendChild(humanText(transcript));
//     botVoice(transcript);
// }

// voice.addEventListener('click', () => {
//     recorder.start();
// })