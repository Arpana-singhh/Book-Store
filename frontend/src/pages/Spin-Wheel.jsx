import React, { useState, useEffect, useRef } from "react";
import { Wheel } from "react-custom-roulette";
import SpinResultModal from "../components/SpinResultModal";
import WheelPin from "../components/WheelPin"; // Make sure you have this as a normal component

export default function SpinWheel() {
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);
  const [selectedPrize, setSelectedPrize] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [spinLocked, setSpinLocked] = useState(false);

  const wheelRef = useRef(null);

  // Optional: Set document title
  useEffect(() => {
    document.title = "Spin Wheel";
  }, []);

  const data = [
    { option: "Prize 1" },
    { option: "Prize 2" },
    { option: "Prize 3" },
    { option: "Prize 4" },
    { option: "Prize 5" },
    { option: "Prize 6" },
    { option: "Prize 7" },
    { option: "Prize 8" },
    { option: "Prize 9" },
    { option: "Prize 10" },
    { option: "Prize 11" },
    { option: "Prize 12" },
    { option: "Prize 13" },
    { option: "Prize 14" },
  ];

  const backgroundColors = ["#05683A", "#085732"];
  const customizedData = data.map((item, index) => ({
    option: item.option,
    style: {
      backgroundColor: backgroundColors[index % 2],
      textColor: "white",
      fontSize: "16",
    },
  }));

  const handleSpinClick = () => {
    if (spinLocked) return;

    const newPrizeNumber = Math.floor(Math.random() * customizedData.length);
    setPrizeNumber(newPrizeNumber);
    setMustSpin(true);
    setSpinLocked(true);
  };

  const handleSpinEnd = () => {
    setMustSpin(false);
    setSelectedPrize(customizedData[prizeNumber].option);
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setSpinLocked(false);
  };

  const handleMouseOrTouchStart = () => {
    if (!spinLocked) handleSpinClick();
  };

  return (
    <div className="main-area spin-area">
      <div className="container">
        <div className="main-title-box">
          <h1 className="font-48 main-title">Spin Wheel</h1>
        </div>
        <div className="row">
          <div className="spn-wrap">
            <div className="spin-ttl">
              <h4>The Wheel of Fortune</h4>
              <p>Click the wheel to win a prize!</p>
            </div>
            <div className="spin-container">
              <WheelPin />
              <div
                ref={wheelRef}
                onMouseDown={handleMouseOrTouchStart}
                onTouchStart={handleMouseOrTouchStart}
              >
                <Wheel
                  mustStartSpinning={mustSpin}
                  prizeNumber={prizeNumber}
                  data={customizedData}
                  onStopSpinning={handleSpinEnd}
                  outerBorderColor="transparent"
                  outerBorderWidth={0}
                  radiusLineColor="#fff"
                  radiusLineWidth={2}
                  textDistance={55}
                  spinDuration={0.75}
                />
              </div>
              <div className="spin-button-wrapper">
                <button
                  onClick={handleSpinClick}
                  className="spin-button"
                  disabled={spinLocked}
                >
                  Spin
                </button>
              </div>
            </div>
            <p className="spn-bt-txt">
              (The Wheel of Fortune is run by Rebate My Tax Ltd. Registered number: 09270377)
            </p>
          </div>
        </div>
      </div>

      {/* Result Modal */}
      <SpinResultModal
        prize={selectedPrize}
        isOpen={isModalOpen}
        onClose={handleModalClose}
      />
    </div>
  );
}
