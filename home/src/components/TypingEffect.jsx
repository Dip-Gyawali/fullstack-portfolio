import { useEffect, useRef } from "react";
import Typed from "typed.js";

const TypingEffect = ({ roles }) => {
    const el = useRef(null);
    const typed = useRef(null);
  
    useEffect(() => {
      if (!roles?.length) return;
  
      if (typed.current) {
        typed.current.destroy();
      }
  
      const roleNames = roles.map(role => role.name);
  
      typed.current = new Typed(el.current, {
        strings: roleNames,
        typeSpeed: 100,
        backSpeed: 50,
        loop: true,
      });
  
      return () => {
        typed.current.destroy();
      };
    }, [roles]);
  
    return <span className="typed" ref={el} />;
  };

export default TypingEffect;