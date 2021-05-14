import { handleHTTPError } from '../../utils';
import database from '../../db/models';

/*
Get all videos
*/
const getCategories = async (req, res, next) => {
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

export {
	getVideoById,
	getCategories,
};
