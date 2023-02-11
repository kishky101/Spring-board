import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect, useRef } from "react";
import { faCircleMinus, faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import { scaleIn } from "../../utils/framer-motion/framer";
import './course-card.styles.scss'

const CourseCard = ({course}) => {
    const [icon, setIcon] = useState({})
    const [isChecked, setIsChecked] = useState(false)
    const {courseName, iconClass, courseIntro, imageUrl} = course;

    const inputRef = useRef();
    const pRef = useRef();

    const inputHandler = (e) => {
        if (e.target.checked) {
            setIsChecked(true)
        }else {
            setIsChecked(false)
        }
    }

    const heightHandler = () => {
        setIsChecked(!isChecked)
    }


    useEffect(() => {
        import("@fortawesome/free-solid-svg-icons").then((res) => setIcon(res[iconClass]));
    })

    //1 . https://images.unsplash.com/photo-1609599006353-e629aaabfeae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80
    //2 . https://c4.wallpaperflare.com/wallpaper/71/282/336/islam-arabic-hd-wallpaper-preview.jpg
    //3 . https://images.unsplash.com/photo-1618383406944-0df8186c3aff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80
    //OR  https://images.unsplash.com/photo-1574246604907-db69e30ddb97?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=373&q=80
    //4 . https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/bd2af736410459.571b26df69d59.jpg
    //5 . https://images.unsplash.com/photo-1603224288850-cf0a7939278c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80
       
    return (
        <motion.div
        layout='size'
        initial='hidden'
        whileInView='show'
        variants={scaleIn('up', 0.1)}
        viewport={{once: true}}
        className='course' onClick={heightHandler}>
            <div className='iconContainer'>
                <img src={imageUrl} />
                {/*<FontAwesomeIcon icon={icon} className='icon'/>*/}
            </div>
            <h2 className='courseTitle'>{courseName}</h2>  
            <div className="demo-div">
                <p className='courseIntro' style={isChecked? {height: pRef.current.scrollHeight} : {}} ref={pRef}>{courseIntro}</p>
                <button>
                    
                    {!isChecked && <FontAwesomeIcon icon={faCirclePlus} className='expand' />}
                    {isChecked && <FontAwesomeIcon icon={faCircleMinus} className='collapse' />}
                    <input type={'checkbox'} onChange={inputHandler} className='expand-button' ref={inputRef} />
                </button>   
            </div>
            
        </motion.div>
    )
}

export default CourseCard;