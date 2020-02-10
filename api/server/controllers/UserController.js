import UserService from '../services/UserService';
import Util from '../utils/Utils';

const util = new Util();

class UserController {
    static async getAllUsers(req, res) {
        try {
          const allUsers = await UserService.getAllUsers();
          if (allUsers.length > 0) {
            util.setSuccess(200, 'Users retrieved', allUsers);
          } else {
            util.setSuccess(200, 'No User found');
          }
          return util.send(res);
        } catch (error) {
          util.setError(400, error);
          return util.send(res);
        }
    }

    static async addUser(req, res) {

        if(!req.body.title || !req.body.firstName || !req.body.lastName) {
            util.setError(400, 'Please provide complete details');
            return util.send(res);
        }

        const newUser = req.body;

        try {
            const createdUser = await UserService.addUsers(newUser);
            util.setSuccess(201, 'User Added', createdUser);
            return util.send(res);
        } catch (error) {
            util.setError(400, error.message);
            return util.send(res);
        }
    }
}

export default UserController;