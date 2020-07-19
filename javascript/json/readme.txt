        var sendCharacterInfo = new Object();
        sendCharacterInfo.type = "Character";
        sendCharacterInfo.user_id = clientSocket.user_id;
        sendCharacterInfo.location = clientSocket.player.location;
        sendCharacterInfo.x = clientSocket.player.x;
        sendCharacterInfo.y = clientSocket.player.y;
        sendCharacterInfo.dir = clientSocket.player.currentDir;
        sendCharacterInfo.targetX = clientSocket.player.targetX;
        sendCharacterInfo.targetY = clientSocket.player.targetY;

        var jsonInfo = JSON.stringify(sendCharacterInfo);