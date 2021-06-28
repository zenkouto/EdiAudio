const ytdl = require('ytdl-core');
const ytsearch = require('yt-search');
module.exports = {
    name: 'dl',
    description: 'This command will download',
    async execute(message,args, cmd, client, Discord){
        if(!args.length) return message.channel.send('You need to send the second argument!');
        if (ytdl.validateURL(args[0])) {
            const song_info = await ytdl.getInfo(args[0]);
            song = { title: song_info.videoDetails.title, url: song_info.videoDetails.video_url }
        } else {
            //If there was no link, we use keywords to search for a video. Set the song object to have two keys. Title and URl.
            const video_finder = async (query) =>{
                const video_result = await ytSearch(query);
                return (video_result.videos.length > 1) ? video_result.videos[0] : null;
            }
            const video = await video_finder(args.join(' '));
                if (video){
                    song = { title: video.title, url: video.url }
                } else {
                     message.channel.send('Error finding video.');
                }
                const stream = ytdl(song.url, { filter: 'audioonly' });
        message.channel.send(stream);
    }
}