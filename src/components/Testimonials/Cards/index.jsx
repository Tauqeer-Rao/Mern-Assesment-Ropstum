import React, { useState } from "react";
import { Rate, Card } from "antd";
import ClientImage1 from "../../../assets/images/testimonials/client1.png";
import ClientImage2 from "../../../assets/images/testimonials/client2.png";
import ClientImage3 from "../../../assets/images/testimonials/client3.png";

const TestimonialCard = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const testimonials = [
    {
      id: 1,
      value: 3.5,
      description: (
        <>
          Recovery Delivered is great! I cannot believe how fast and easy the
          process is.
          The staff and providers are very quick to respond to your messages. I
          made my appointment same day and had everything I needed. I was
          so surprised. Thank you Recovery Delivered!
        </>
      ),
      image: ClientImage1,
      name: "Nicholas O.",
    },
    {
      id: 2,
      value: 3.5,
      description: (
        <>
          My daughter started her online opioid treatment program not too long
          ago, and the process was so fast and simple. <br />
          Very affordable as well. We are in Florida and were able to do
          everything online. Thank you so much for everything Recovery Delivered!
        </>
      ),
      image: ClientImage2,
      name: "Christine M.",
    },
    {
      id: 3,
      value: 3.5,
      description: (
        <>
          If you need help, go here. Get online. Sign up. Pay the fees and never
          look back. <br />
          I went to an actual Suboxone doctor in my area for three years, and it
          took so much time. He caused me so much anxiety and made my entire treatment hard.
        </>
      ),
      image: ClientImage3,
      name: "Heather B.",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {testimonials.map(({ id, value, description, image, name }) => (
        <Card
          key={id}
          className={`shadow-[0px_10px_30px_0px_#0000000F] h-full transition-transform duration-500 ease-in-out hover:scale-105 hover:rotate-[-4deg] ${hoveredCard !== null && hoveredCard !== id ? 'opacity-50' : 'opacity-100'}`}
          onMouseEnter={() => setHoveredCard(id)}
          onMouseLeave={() => setHoveredCard(null)}
        >
          <div className="flex flex-col gap-6 max-w-[450px]">
            <div>
              <Rate allowHalf value={value} disabled />
            </div>
            <div className="flex-grow">
              <p className="description_color text-lg font-normal">
                {description}
              </p>
            </div>
            <div className="flex gap-3">
              <img
                src={image}
                alt="client-image"
                className="w-[60px] h-[60px] rounded-full"
              />
              <p className="self-center text-[20px] font-medium secondary_color">
                {name}
              </p>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default TestimonialCard;
