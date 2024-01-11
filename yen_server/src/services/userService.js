const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const { genneralAccessToken, genneralRefreshToken } = require("./JwtService");

// Tạo người dùng mới
const createUser = (newUser) => {
  return new Promise(async (resolve, reject) => {
    const { email, password, confirmPassword } = newUser;
    try {
      // Kiểm tra xem người dùng đã tồn tại chưa
      const checkUser = await User.findOne({
        email: email,
      });
      if (checkUser !== null) {
        resolve({
          status: "ERR",
          message: "The email is already",
        });
      }
      // Mã hóa mật khẩu và tạo người dùng mới
      const hash = bcrypt.hashSync(password, 10);
      const createdUser = await User.create({
        email,
        password: hash,
      });
      if (createdUser) {
        resolve({
          status: "OK",
          message: "SUCCESS",
          data: createdUser,
        });
      }
    } catch (e) {
      message: `${e}`;
    }
  });
};

// Đăng nhập người dùng
const loginUser = (userLogin) => {
  return new Promise(async (resolve, reject) => {
    const { email, password } = userLogin;
    try {
      // Kiểm tra xem người dùng có tồn tại không
      const checkUser = await User.findOne({
        email: email,
      });
      if (checkUser === null) {
        resolve({
          status: "ERR",
          message: "The user is not defined",
        });
      }
      // So sánh mật khẩu
      const comparePassword = bcrypt.compareSync(password, checkUser.password);

      if (!comparePassword) {
        resolve({
          status: "ERR",
          message: "The password or user is incorrect",
        });
      }
      // Tạo access token và refresh token
      const access_token = await genneralAccessToken({
        id: checkUser.id,
        isAdmin: checkUser.isAdmin,
      });

      const refresh_token = await genneralRefreshToken({
        id: checkUser.id,
        isAdmin: checkUser.isAdmin,
      });

      resolve({
        status: "OK",
        message: "SUCCESS",
        access_token,
        refresh_token,
      });
    } catch (e) {
      reject(e);
    }
  });
};

// Cập nhật thông tin người dùng
const updateUser = (id, data) => {
  return new Promise(async (resolve, reject) => {
    try {
      // Kiểm tra xem người dùng có tồn tại không
      const checkUser = await User.findOne({
        _id: id,
      });
      if (checkUser === null) {
        resolve({
          status: "ERR",
          message: "The user is not defined",
        });
      }

      // Cập nhật thông tin người dùng
      const updatedUser = await User.findByIdAndUpdate(id, data, { new: true });
      resolve({
        status: "OK",
        message: "SUCCESS",
        data: updatedUser,
      });
    } catch (e) {
      reject(e);
    }
  });
};

// Xóa người dùng
const deleteUser = (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      // Kiểm tra xem người dùng có tồn tại không
      const checkUser = await User.findOne({
        _id: id,
      });
      if (checkUser === null) {
        resolve({
          status: "ERR",
          message: "The user is not defined",
        });
      }

      // Xóa người dùng
      await User.findByIdAndDelete(id);
      resolve({
        status: "OK",
        message: "Delete user success",
      });
    } catch (e) {
      reject(e);
    }
  });
};

// Xóa nhiều người dùng
const deleteManyUser = (ids) => {
  return new Promise(async (resolve, reject) => {
    try {
      // Xóa nhiều người dùng
      await User.deleteMany({ _id: ids });
      resolve({
        status: "OK",
        message: "Delete user success",
      });
    } catch (e) {
      reject(e);
    }
  });
};

// Lấy thông tin tất cả người dùng
const getAllUser = () => {
  return new Promise(async (resolve, reject) => {
    try {
      // Lấy tất cả người dùng và sắp xếp theo thời gian
      const allUser = await User.find().sort({ createdAt: -1, updatedAt: -1 });
      resolve({
        status: "OK",
        message: "Success",
        data: allUser,
      });
    } catch (e) {
      console("Error message: ", e);
      throw (e)
    }
  });
};

// Lấy thông tin chi tiết người dùng
const getDetailsUser = (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      // Lấy thông tin người dùng dựa trên ID
      const user = await User.findOne({
        _id: id,
      });
      if (user === null) {
        resolve({
          status: "ERR",
          message: "The user is not defined",
        });
      }
      resolve({
        status: "OK",
        message: "SUCESS",
        data: user,
      });
    } catch (e) {
      reject(e);
    }
  });
};

module.exports = {
  createUser,
  loginUser,
  updateUser,
  deleteUser,
  getAllUser,
  getDetailsUser,
  deleteManyUser,
};
