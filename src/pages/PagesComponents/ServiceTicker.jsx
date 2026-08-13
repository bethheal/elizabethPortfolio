const services = [
  "Frontend Development",
  "Full-Stack Applications",
  "UI / UX Design & Implementation",
  "Motion Graphics & Animation",
];

const ServiceTicker = () => {
  return (
    <div className="relative mt-4 h-7 w-full overflow-hidden">
      <div className="animate-service-scroll">
        {[...services, ...services].map((service, index) => (
          <div
            key={index}
            className="
              h-7
              text-xs
              font-light
              leading-7
              text-white/50
              sm:text-sm
            "
          >
            {service}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceTicker;