import { Carousel,boolean } from "@material-tailwind/react";
import useProducts from '../../hooks/useProducts';
import MidiaPost from "../MidiaPost/MidiaPost";



function UncontrolledExample() {

    const [products,setProduct]= useProducts()

  return (
    <div>
 <Carousel autoplay autoplayDelay={5000}    transition={{ duration: 0.5 }} loop className="rounded-xl "  navigation={({ setActiveIndex, activeIndex, length }) => (
        <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
          {new Array(length).fill("").map((_, i) => (
            <span
              key={i}
              className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
              }`}
              onClick={() => setActiveIndex(i)}
            />
          ))}
        </div>
      )}>
    {
        products.map(product =><MidiaPost
        key ={product.id}
        product ={product}
        ></MidiaPost>)
    }
    </Carousel>
    </div>
  );
}

export default UncontrolledExample;