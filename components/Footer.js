const Footer = () => {
  return (
    <>
      <div className="bg-gray-200 zigzag min-h-[20vh] mb-0 text-center h-32 flex items-center justify-center -mt-4">
        <p className="text-xl text-gray-800">
          &copy; Copyright 2022 <span className="font-bold">Chandler Zhu</span>
        </p>
      </div>
      <style jsx>{`
        .zigzag {
          --mask: conic-gradient(
              from 135deg at top,
              #0000,
              #000 1deg 89deg,
              #0000 90deg
            )
            50%/30px 100%;
          -webkit-mask: var(--mask);
          mask: var(--mask);
        }
      `}</style>
    </>
  );
};

export default Footer;
