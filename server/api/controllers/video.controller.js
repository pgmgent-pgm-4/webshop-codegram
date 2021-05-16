import { handleHTTPError } from '../../utils';
import database from '../../db/models';

/*
Get all videos
*/
const getVideos = async (req, res, next) => {
	try {
		// Get videos from database
		const videos = await database.Video.findAll();
		// Send response
		res.status(200).json(videos);
	} catch (error) {
		handleHTTPError(error, next);
	}
};

/*
Get a specific video
*/
const getVideoById = async (req, res, next) => {
	try {
		// Get videoId parameter
		const { videoId } = req.params;
		// Get specific post from database
		const video = await database.Video.findAll({
			where: {
				id: videoId,
			},
		});
		// Send response
		res.status(200).json(video);
	} catch (error) {
		handleHTTPError(error, next);
	}
};

/*
Create a video
*/
const createVideo = async (req, res, next) => {
	try {
		// Get the video data from the request body
		const { video } = req.body;
		const now = new Date();
		// Add id and date strings
		const videoToCreate = {
			id: uuidv4(),
			course_id: video.course_id,
			url: video.url,
			name: video.name,
			paused_at: video.paused_at,
			duration: video.duration,
			createdAt: now,
			updatedAt: now,
		};
		// Send response
		const response = await database.Video.create(videoToCreate);
		if (response && response.message) {
			res.status(500).send(`Failed: ${response.message}`)
		} else {
			res.status(201).send(`Created video: ${JSON.stringify(video)}`)
		}
	} catch (error) {
		handleHTTPError(error, next);
	}
}

export {
	getVideoById,
	getVideos,
	createVideo,
};
