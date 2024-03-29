import { Link } from 'react-router-dom';
import { Typography, Card, CardContent, CardMedia } from '@mui/material';

import { demoThumbnailUrl, demoVideoUrl, demoVideoTitle, demoChannelUrl, demoChannelTitle } from '../utils/constants';
import { CheckCircle } from '@mui/icons-material';

const VideoCard = ({ video: { id: { videoId }, snippet } }) => {
    console.log(videoId, snippet);
    return (
        <Card sx={{width: {xs:'100%',sm:'358px', md:'320px'}, borderRadius: 0, boxShadow:'none'}}>
            <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
                <CardMedia
                    image={snippet?.thumbnails?.high?.url || demoThumbnailUrl}
                    alt={snippet?.title}
                    sx={{ width: {xs: '100%',sm:'358px', md: '320px'} , height: 180 }}
                />
                <CardContent sx={{backgroundColor: '#1e1e1e',height:'106px'}}>
                    <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
                        <Typography variant='subtitle1' fontWeight="bold" color="#fff">
                            {snippet?.title.slice(0,60) ||
                            demoVideoTitle.slice(0,60)}
                        </Typography>
                    </Link>
                    <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl}>
                        <Typography variant='subtitle2' fontWeight="bold" color="grey" sx={{display:'flex', alignItems:'center'}}>
                            {snippet?.channelTitle ||
                            demoChannelTitle}
                            <CheckCircle sx={{fontsize: 12, color: 'grey', ml: '5px'}}/>
                        </Typography>
                    </Link>
                </CardContent>
            </Link>
        </Card>
    )
}

export default VideoCard