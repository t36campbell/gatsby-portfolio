import React from "react"
import Layout from "../components/layout/index"
import SEO from "../components/seo/index"
import Container from "../components/container/index"
import { css } from "@emotion/core"

const AboutPage = () => {
  const flex_container = css({
    display: "flex",
    flexDirection: "column",
    alignItems: "left",
    width: "80%",
  })
  return (
    <Layout>
      <SEO title="About" />
      <Container>
        <h1>Im the about page</h1>
        <div css={flex_container}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet
            aliquam id diam maecenas ultricies mi eget. Dui vivamus arcu felis
            bibendum ut. Sem viverra aliquet eget sit amet tellus. Pharetra
            magna ac placerat vestibulum lectus mauris ultrices eros in. Amet
            est placerat in egestas. Potenti nullam ac tortor vitae purus
            faucibus ornare suspendisse sed. Aliquet nec ullamcorper sit amet
            risus nullam eget felis. Tincidunt vitae semper quis lectus nulla at
            volutpat. Eget nulla facilisi etiam dignissim diam. Consectetur
            libero id faucibus nisl. Justo nec ultrices dui sapien. Donec massa
            sapien faucibus et molestie ac. Est ante in nibh mauris cursus
            mattis.
          </p>
          <p>
            Bibendum at varius vel pharetra vel turpis nunc eget lorem.
            Convallis posuere morbi leo urna molestie at elementum eu facilisis.
            Odio tempor orci dapibus ultrices in iaculis nunc sed augue.
            Elementum curabitur vitae nunc sed velit dignissim sodales ut eu.
            Egestas erat imperdiet sed euismod nisi porta lorem mollis aliquam.
            Sed elementum tempus egestas sed sed risus. Aenean et tortor at
            risus viverra adipiscing at in. Velit scelerisque in dictum non
            consectetur a erat nam at. Consequat mauris nunc congue nisi.
            Interdum posuere lorem ipsum dolor sit amet consectetur.
          </p>
          <p>
            Neque sodales ut etiam sit amet nisl purus in. Vitae purus faucibus
            ornare suspendisse sed nisi lacus sed viverra. Nisl condimentum id
            venenatis a. Lacus viverra vitae congue eu consequat ac. Mollis
            aliquam ut porttitor leo a diam sollicitudin. Nunc sed augue lacus
            viverra vitae congue eu. Vitae ultricies leo integer malesuada nunc
            vel risus. Turpis nunc eget lorem dolor sed viverra ipsum nunc
            aliquet. Sollicitudin tempor id eu nisl nunc mi ipsum faucibus.
            Volutpat sed cras ornare arcu. Varius quam quisque id diam vel quam
            elementum. Mollis aliquam ut porttitor leo a diam sollicitudin
            tempor id.
          </p>
          <p>
            Mattis rhoncus urna neque viverra justo nec ultrices dui. Arcu
            bibendum at varius vel pharetra vel turpis nunc. Et ultrices neque
            ornare aenean euismod elementum. Suspendisse faucibus interdum
            posuere lorem ipsum dolor sit amet consectetur. Turpis egestas
            pretium aenean pharetra. Eget nullam non nisi est sit. Tortor at
            risus viverra adipiscing at in tellus integer. Mauris a diam
            maecenas sed enim ut sem viverra. Sed velit dignissim sodales ut eu
            sem. Suspendisse faucibus interdum posuere lorem. Velit euismod in
            pellentesque massa placerat duis. Massa ultricies mi quis hendrerit
            dolor magna. Egestas integer eget aliquet nibh praesent tristique.
            Nunc mattis enim ut tellus elementum sagittis. Feugiat in fermentum
            posuere urna. Adipiscing elit pellentesque habitant morbi tristique.
            Quam elementum pulvinar etiam non quam lacus suspendisse faucibus
            interdum. Turpis tincidunt id aliquet risus feugiat.
          </p>
          <p>
            Feugiat scelerisque varius morbi enim nunc. Morbi enim nunc faucibus
            a pellentesque. Id faucibus nisl tincidunt eget nullam non nisi est
            sit. Mi bibendum neque egestas congue quisque egestas diam. Maecenas
            ultricies mi eget mauris pharetra et. Enim facilisis gravida neque
            convallis a cras semper auctor. Scelerisque eu ultrices vitae auctor
            eu augue. Adipiscing elit ut aliquam purus sit amet luctus venenatis
            lectus. Volutpat commodo sed egestas egestas fringilla phasellus
            faucibus. Pellentesque elit eget gravida cum sociis natoque. Leo vel
            fringilla est ullamcorper eget nulla facilisi. Malesuada nunc vel
            risus commodo viverra. Donec enim diam vulputate ut pharetra sit
            amet. Amet purus gravida quis blandit turpis cursus in. Quam
            elementum pulvinar etiam non quam lacus. Feugiat nisl pretium fusce
            id velit ut. Tempus iaculis urna id volutpat. Lobortis elementum
            nibh tellus molestie nunc non blandit.
          </p>
          <p>
            Nisi scelerisque eu ultrices vitae auctor eu. Ante metus dictum at
            tempor commodo ullamcorper a lacus vestibulum. Ut sem viverra
            aliquet eget sit amet. In ornare quam viverra orci sagittis eu. Nunc
            non blandit massa enim nec. Dui sapien eget mi proin sed libero.
            Netus et malesuada fames ac turpis egestas. Morbi non arcu risus
            quis. Facilisis mauris sit amet massa vitae tortor condimentum
            lacinia quis. Cursus turpis massa tincidunt dui ut ornare. Ipsum
            dolor sit amet consectetur adipiscing elit. Duis at tellus at urna
            condimentum.
          </p>
        </div>
      </Container>
    </Layout>
  )
}
export default AboutPage
