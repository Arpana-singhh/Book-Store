import { Modal } from "antd";
import React from "react";
const prizeContent = [
    {
      option: "Prize 1",
      title: "Free Gift!",
      description: "Congratulations! You've unlocked an exclusive free gift as a token of appreciation for participating. This could be anything from a surprise item to a premium sample — it’s completely on us!",
      note: "Check your email to claim it."
    },
    {
      option: "Prize 2",
      title: "10% Discount",
      description: "Great news! You've earned a 10% discount on your next order. It's our way of saying thank you for being an awesome customer. Don't forget to use your exclusive code at checkout!",
      note: "Use code PRIZE2 at checkout."
    },
    {
      option: "Prize 3",
      title: "Special Voucher",
      description: "You just received a ₹500 voucher to spend on our platform! Whether it's for yourself or a gift for someone else, enjoy the freedom to shop your favorite items.",
      note: "Valid for 7 days only."
    },
    {
      option: "Prize 4",
      title: "Bonus Points",
      description: "You've earned 100 bonus loyalty points! These points can be redeemed for future discounts, gifts, or exclusive deals. Keep spinning and collecting!",
      note: "Points added to your account."
    },
    {
      option: "Prize 5",
      title: "Free Shipping",
      description: "Who doesn’t love free shipping? Your next order ships absolutely free, regardless of how big or small. Sit back, relax, and wait for your goodies to arrive.",
      note: "No minimum order value required."
    },
    {
      option: "Prize 6",
      title: "Lucky Draw Entry",
      description: "You’ve secured a spot in our mega lucky draw event! One lucky winner will walk away with the grand prize — fingers crossed, it could be you!",
      note: "Winners will be announced next week."
    },
    {
      option: "Prize 7",
      title: "Exclusive Deal",
      description: "You’ve unlocked access to an exclusive members-only deal. These handpicked offers are not available to the public and are perfect for smart shoppers like you.",
      note: "Limited time offer."
    },
    {
      option: "Prize 8",
      title: "50% Off One Item",
      description: "Your spin just got you 50% off on any one item of your choice. It’s a perfect chance to grab that product you’ve been eyeing at half the price!",
      note: "Valid for one-time use only."
    },
    {
      option: "Prize 9",
      title: "Coupon Code",
      description: "Congratulations! You've unlocked a special coupon code — COUPON2025 — that brings instant savings to your cart. It’s quick, easy, and ready to use.",
      note: "Apply at checkout."
    },
    {
      option: "Prize 10",
      title: "Gift Hamper",
      description: "You’ve won a curated gift hamper filled with premium goodies worth ₹1000! It’s our little surprise box of joy, packed with care and delivered to your doorstep.",
      note: "Delivered within 5-7 business days."
    },
    {
      option: "Prize 11",
      title: "Digital Download",
      description: "Enjoy a free digital eBook or a pack of beautiful wallpapers! Whether you’re into reading or design, we’ve got something inspiring just for you.",
      note: "Download link sent to your email."
    },
    {
      option: "Prize 12",
      title: "Early Access",
      description: "You’re getting early access to our upcoming product launches and offers before they go public. Be the first to grab what others can’t even see yet!",
      note: "Login to view early access deals."
    },
    {
      option: "Prize 13",
      title: "Upgrade Offer",
      description: "You’ve unlocked a complimentary upgrade to your current subscription plan! Enjoy all the premium features without any additional cost — it's on us!",
      note: "Offer valid for 48 hours."
    },
    {
      option: "Prize 14",
      title: "Exclusive Discount",
      description: "A flat ₹200 discount is now yours! No need for any promo code — this offer will be automatically applied when you check out. Happy shopping!",
      note: "No promo code needed — auto-applied at checkout."
    }
  ];
const SpinResultModal = ({ prize, isOpen, onClose }) => {
  const matchedPrize = prizeContent.find((item) => item.option === prize);

  return (
    <Modal centered title="Thanks for Spinning!" open={isOpen} onOk={onClose} onCancel={onClose} className="spinModal">
      {matchedPrize ? (
        <div className="spn-rlt">
          <h3 className="spn-title">{matchedPrize.title}</h3>
          <div className="spn-rlt-info">
            <p className="spn-desc">{matchedPrize.description}</p>
            <span className="spn-note">{matchedPrize.note}</span>
          </div>
          <div className="spn-txt">
            <span className="spn-chance">Come back again next month for your next chance to win </span>
            <p className="ref-num">
              <span>Reference number:</span> bLCtp-iEvEl-Az4te
            </p>
          </div>
        </div>
      ) : (
        <h3>{"Something went wrong!"}</h3>
      )}
    </Modal>
  );
};

export default SpinResultModal;
