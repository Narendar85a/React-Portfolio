import React from 'react'
import { Card } from 'antd';
// Font Awesome (fa), Simple Icons (si), Ant Design Icons (ai), Material UI Icons (si)
import { FaReact, FaJs, FaHtml5, FaCss3Alt, FaGithub } from 'react-icons/fa';
import { SiNextdotjs, SiRedux, SiTypescript, SiMui, SiAntdesign } from 'react-icons/si';


const AboutCard = () => {
  return (
    <div>

     <Card style={{ width: 300 }}>
       <FaReact title="React" />
     </Card>

     <Card style={{ width: 300 }}>
       <FaJs title="JavaScript" />
     </Card>

     <Card style={{ width: 300 }}>
       <SiNextdotjs title="Next.js" />
     </Card>

     <Card style={{ width: 300 }}>
       <SiRedux title="Redux" />
     </Card>

     <Card style={{ width: 300 }}>
       <FaHtml5 title="HTML5" />
     </Card>

     <Card style={{ width: 300 }}>
       <FaCss3Alt title="CSS3" />
     </Card>

     <Card style={{ width: 300 }}>
       <SiTypescript title="TypeScript" />
     </Card>

     <Card style={{ width: 300 }}>
       <SiMui title="Material UI" />
     </Card>

     <Card style={{ width: 300 }}>
       <SiAntdesign title="Ant Design" />
     </Card>

     <Card style={{ width: 300 }}>
       <FaGithub title="GitHub" />
     </Card>

    </div>
  )
}

export default AboutCard