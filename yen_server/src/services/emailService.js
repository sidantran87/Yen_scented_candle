const nodemailer = require("nodemailer");
const dotenv = require("dotenv");
dotenv.config();
var inlineBase64 = require("nodemailer-plugin-inline-base64");

// Gửi email thông báo đơn hàng mới
const sendEmailCreateOrder = async (email, orderItems) => {
  // Tạo đối tượng transporter để gửi email
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: process.env.MAIL_ACCOUNT, // địa chỉ email của bạn
      pass: process.env.MAIL_PASSWORD, // mật khẩu email của bạn
    },
  });
  // Sử dụng plugin để nhúng hình ảnh trong email
  transporter.use("compile", inlineBase64({ cidPrefix: "somePrefix_" }));

  let listItem = "";
  const attachImage = [];

  // Tạo nội dung email dựa trên thông tin đơn hàng
  orderItems.forEach((order) => {
    listItem += `<div>
    <div>
      You have ordered the product <b>${order.name}</b> with quantity: <b>${order.amount}</b> and price: <b>${order.price} VND</b></div>
      <div>Below is the image of the product</div>
    </div>`;
    attachImage.push({ path: order.image });
});

  // Gửi mail với các thông tin cần thiết
  let info = await transporter.sendMail({
    from: process.env.MAIL_ACCOUNT, 
    to: email, 
    subject: "Order Successful", 
    text: "Thank you for placing an order", 
    html: `<div><b>Your order was successful</b></div> ${listItem}`, 
    attachments: attachImage, 
});
};

// Xuất hàm để sử dụng ở nơi khác
module.exports = {
  sendEmailCreateOrder,
};
