import BackendLogos from "../components/BackendLogos";
import DatabaseLogos from "../components/DatabaseLogos";
import FrontendLogos from "../components/FrontendLogos";
import MobileStack from "../components/MobileStack";

export default function Skills() {
  return (
    <section className="mx-4 md:mx-0 text-center">
      <h1 className="my-3 main-heading">Skills</h1>
      <p className="my-3 mx-3 md:mx-10">
        Proficient in the below mentioned skills and also building REST and
        GraphQL APIs. Securing the APIs using JWT tokens and encrypting the
        passwords and securely storing them in the Database. Also having quite a
        bit of experience with AWS through Serverless framework (Lambda,
        AppSync, Cognito & S3).
      </p>
      <br />
      <FrontendLogos />
      <br />
      <hr className="w-3/5 mx-auto" />
      <br />
      <BackendLogos />
      <br />
      <hr className="w-3/5 mx-auto" />
      <br />
      <DatabaseLogos />
      <br />
      <hr className="w-3/5 mx-auto" />
      <br />
      <MobileStack />
      <br />
      <hr className="w-3/5 mx-auto" />
      <p className="my-3 mx-3 md:mx-10">
        All of these have their own use cases. For Example, Go and Python are
        comparable in terms of runtime speed and development speed. For
        development speed, python is prefered by the companies. But for runtime
        efficiency, Go is prefered. Same goes to Mobile App Development. Even
        though both Flutter and React Native are the most popular cross platform
        mobile app development technologies out there, React Native is prefered
        by most of the companies due to Javascript. Even though every React
        Native app ships with a Javascript engine which used bridge to
        communicate with the native code, most developers use it as it is more
        convenient to build their business logic for both Mobile and
        Web(ReactJS). But on the other hand, Flutter is also being adopted by
        most of the companies due to its near native performance. Dart is the
        language used by Flutter which can be compiled both Just in Time(JIT) &
        Ahed of Time(AOT), and can provide up to 60-120 fps performance on
        capable devices.
      </p>
      <br />
    </section>
  );
}
