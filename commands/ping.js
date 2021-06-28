module.exports = {
    name: 'ping',
    description: 'This is a ping command!',
    execute(message,args, cmd, client, Discord){
        message.channel.send('Hey im Alive');
    }
}