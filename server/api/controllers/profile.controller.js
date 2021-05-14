import { handleHTTPError } from '../../utils';
import database from '../../db/models';

/*
Get all profiles
*/
const getProfiles = async (req, res, next) => {
	try {
		// Get profiles from database
		const profiles = await database.Profile.findAll();
		// Send response
		res.status(200).json(profiles);
	} catch (error) {
		handleHTTPError(error, next);
	}
};

/*
Get a specific profile
*/
const getProfileById = async (req, res, next) => {
	try {
		// Get profileId parameter
		const { profileId } = req.params;
		// Get specific post from database
		const profile = await database.Profile.findAll({
			where: {
				id: profileId,
			},
		});
		// Send response
		res.status(200).json(profile);
	} catch (error) {
		handleHTTPError(error, next);
	}
};

export {
	getProfileById,
	getProfiles,
};
