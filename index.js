
let string = "hi there"

function shout(string) {
    return string.toUpperCase()
}

function whisper(string) {
    return string.toLowerCase()
}

function logShout(string) {
    console.log(string.toUpperCase())
}

function logWhisper(string) {
    console.log(string.toLowerCase())
}

function sayHiToHeadphonedRoommate(string) {
    let response 
    switch (string) {
        case string.toLowerCase():
            response = "I can't hear you!"
            break
        case string.toUpperCase():
            response = "YES INDEED!"
            break
        case "Let's have dinner together!":
            response = "I would love to!"
            break
    }
    return response
}

