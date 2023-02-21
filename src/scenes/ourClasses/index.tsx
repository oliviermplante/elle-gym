import { SelectedPage, ClassType } from "@/shared/types";
import image1 from "@/assets/image1.png";
import image2 from "@/assets/image2.png";
import image3 from "@/assets/image3.png";
import image4 from "@/assets/image4.png";
import image5 from "@/assets/image5.png";
import image6 from "@/assets/image6.png";
import { motion } from "framer-motion";
import HText from "@/shared/HText";
import Class from "./Class";

const classes: Array<ClassType> = [
  {
    name: "Weight Lifting Classes",
    description:
      "Moderately paced weight lifting class for women with emphasis on proper form, gradual strength building, and overall fitness. Personalized training and progress tracking included.",
    image: image1,
  },
  {
    name: "Yoga Classes",
    description: "Relaxing yet invigorating yoga class for all levels. Focus on proper form, flexibility, balance, and stress relief. Personalized instruction and peaceful environment.",
    image: image2,
  },
  {
    name: "Endurance Training Classes",
    description:
      "Challenging endurance training class emphasizing cardiovascular fitness, muscular endurance, and fat-burning. Incorporates a variety of activities, including running, cycling, and strength training. Personalized coaching and progress tracking.",
    image: image3,
  },
  {
    name: "Stretching Classes",
    description:
      "Relaxing stretching class to improve flexibility, range of motion, and reduce muscle tension. Incorporates a variety of stretching techniques, including static and dynamic stretching.",
    image: image4,
  },
  {
    name: "Body Weight Classes",
    description: "Effective body weight training class using your own body weight for resistance. Focus on building strength, improving flexibility, and toning muscles. With varying modifications for every level.",
    image: image5,
  },
  {
    name: "Recovery Classes",
    description:
      "Revitalizing recovery class to promote healing, relieve stress, and restore energy. Incorporates yoga, stretching, and foam rolling to aid in muscle recovery, injury prevention, and overall wellness.",
    image: image6,
  },
];

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const OurClasses = ({ setSelectedPage }: Props) => {
  return (
    <section id="ourclasses" className="w-full bg-primary-100 py-40">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
      >
        <motion.div
          className="mx-auto w-5/6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="md:w-3/5">
            <HText>OUR CLASSES</HText>
            <p className="py-5">
            We offer a wide range of classes, including yoga, Pilates, strength training, cardio, HIIT, and more. 
            All classes are led by expert instructors and cater to different fitness levels.
            </p>
          </div>
        </motion.div>
        <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
          <ul className="w-[2800px] whitespace-nowrap">
            {classes.map((item: ClassType, index) => (
              <Class
                key={`${item.name}-${index}`}
                name={item.name}
                description={item.description}
                image={item.image}
              />
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
};

export default OurClasses;
