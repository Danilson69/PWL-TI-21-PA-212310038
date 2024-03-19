import Footers from "./Footers";
import Headers from "./Headers";

const LayoutInit = ({ children }) => {
  return (
    <div className="background-image"> 
      <div className="">
        <div className="">
          
          <Headers />

          <section className="text-center"> 
            <div className="">
              {children} 
              <h3>Chapter one: The messengers</h3> 
            </div>
          </section>

          <Footers />

        </div>
      </div>
    </div>
  );
};

export default LayoutInit;
