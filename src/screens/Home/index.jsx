import { ImageBackground, View, Image, Text } from "react-native";

import styles from "./styles";
import Title from "../../components/Title";
import TouchButton from "../../components/TouchButton";
import { ScrollView } from "react-native-gesture-handler";

export default function Home() {
  return (
    <View style={styles.container}>
      <ImageBackground style={styles.image} source={require('../../../assets/Design sem nome (1).png')}>

        <Image style={styles.logo} source={require('../../../assets/ESGreen__3_-removebg-preview.png')}></Image>

        <Text style={styles.titulo}>Sobre a empresa</Text>
        <Text style={styles.subtitulo}>ESGreen</Text>


        <Text style={styles.texto}>
          Fundada em 2018 em Washington D.C nos Estados Unidos.

          A ESGreen é uma empresa comprometida com a sustentabilidade e a preservação do planeta Terra. Nosso objetivo é utilizar a tecnologia e a colaboração coletiva para promover ações ambientais positivas em todo o mundo.

          Missão:
          Nossa missão é inspirar e capacitar as pessoas a agirem em prol do meio ambiente, promovendo ações tangíveis que contribuam para a preservação da natureza e a mitigação das mudanças climáticas.

          Como Funcionamos:

          Através do nosso site, convidamos pessoas de todo o mundo a se cadastrarem e se tornarem parte da nossa comunidade comprometida com o meio ambiente. Ao se cadastrar,
          você não apenas se junta a nós nessa missão vital, mas também tem a oportunidade de contribuir financeiramente para causas ecológicas em todo o mundo.
          Com doações a partir de 1 dólar você pode ajudar a impulsionar nossos esforços para proteger o planeta. Cada contribuição conta e nos permite realizar ações benéficas,
          desde o plantio de árvores em áreas desmatadas até o apoio à conservação de espécies ameaçadas de extinção em diversos países.
          Além disso, como parte do nosso compromisso com a transparência e a responsabilidade, destinamos 5% de todas as doações para o governo dos Estados Unidos, onde temos sede.
          Esses recursos nos auxiliam em várias frentes, desde a promoção da nossa causa por meio de marketing até a facilitação de acordos com outros países para expandir nossos esforços de preservação.
          Ao se juntar a nós, você não apenas faz parte de uma comunidade global dedicada ao meio ambiente, mas também contribui diretamente para a proteção e a preservação dos ecossistemas em todo o mundo.
          Juntos, podemos fazer a diferença.

          Colaboração e Feedback:
          Valorizamos a participação ativa dos nossos membros. Eles têm a oportunidade de deixar seus feedbacks e sugestões para as próximas ações beneficentes da ESGreen.
          Acreditamos que a colaboração e a troca de ideias são fundamentais para maximizar o impacto das nossas iniciativas.

          Compromisso com a Transparência:
          Nosso compromisso com a transparência é fundamental. Divulgamos regularmente informações sobre as ações realizadas em nossas redes sociais, os resultados alcançados e como os recursos são utilizados.
          Queremos que nossos membros sintam-se parte integrante de cada projeto e saibam que estão contribuindo efetivamente para um mundo mais sustentável.

          Na ESGreen, acreditamos que cada pequena ação conta e que juntos podemos fazer a diferença para o futuro do nosso planeta. Junte-se a nós nesta jornada de cuidado e preservação do meio ambiente!
        </Text>

      </ImageBackground>
    </View>
  );
}
