import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import { Container } from "components/misc/Layouts";

import Header from "components/headers/light.js";
import Footer from "components/footers/FiveColumnWithInputForm.js";



export default ({
  
  
}) => {
 
 
  return (
    <AnimationRevealPage>
      <Header />
      <Container>
      <iframe src='https://www.youtube.com/embed/cWDJoK8zw58' width='100%'height={700} ></iframe>
      </Container>
      <Footer />
    </AnimationRevealPage>
  );
};

