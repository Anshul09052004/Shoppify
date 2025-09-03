import React from 'react'
import { Link } from 'react-router-dom';
function item(props) {
    const [tilt, setTilt] = React.useState({ x: 0, y: 0 });

    // Adjust the threshold value to control the tilt effect
    const threshold = 12;

    const handleMove = (e) => {
        const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
        const x = (e.clientX - left) / width - 0.5;
        const y = (e.clientY - top) / height - 0.5;
        setTilt({ x: y * -threshold, y: x * threshold });
    };

    return (
        <div className="rounded-xl shadow-xl overflow-hidden transition-transform duration-200 ease-out cursor-pointer max-w-80 bg-gray-200 hover:bg-gray-300  "
            onMouseMove={handleMove}
            onMouseLeave={() => setTilt({ x: 0, y: 0 })}
            style={{ transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)` }}
        >
            <Link to={`/product/${props.id}`}>
                <img
                    src={props.image}
                 onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                    alt="Product Image"
                    className="w-full h-52 object-contain bg-gray-50 rounded-t-xl p-2"
                />
            </Link>

            <p className="mt-3 px-4 pt-3 mb-1 text-lg font-semibold text-gray-800">
                {props.name}
            </p>

            <div className='flex flex-row'>
                <div className="text-sm px-4 pb-6 text-gray-600 w-5/6">
                    ${props.oldPrice}
                </div>
                <div className="text-sm px-4 pb-6 text-gray-600 w-5/6">
                    ${props.newprice}
                </div>
            </div>
        </div>

    );
};
export default item



