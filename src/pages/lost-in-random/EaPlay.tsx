import Button from "../../components/shared/Button";
import Section from "../../components/shared/Section";

function EaPlay() {
  return (
    <Section className=" bg-cover bg-[url(https://media.contentapi.ea.com/content/dam/eacom/subscription/component-assets/common/ea-play-product-conversion-gradient-jpg-2020-xl.jpg.adapt.768w.jpg)]">
      <div className="flex flex-col gap-y-5 lg:flex-row justify-between ">
        <h2 className="text-white mt-5 text-2xl text-center">
          Disponibile ora su EA Play
        </h2>
        <div className="md:flex justify-center items-center  gap-x-6 ">
          <div className="w-fit m-auto md:m-0 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="138"
              height="45"
              viewBox="0 0 138 45">
              <path
                fill="#FF4747"
                fill-rule="evenodd"
                d="M54.440977,5.03361735 L54.440977,35.2984133 L60.4076097,35.2984133 L60.4076097,24.2731837 L67.7579923,24.2731837 C73.680773,24.2731837 78.090773,20.1664745 78.090773,14.589 C78.090773,9.05445918 73.8536556,5.03361735 67.9740383,5.03361735 L54.440977,5.03361735 Z M67.3259005,19.1721122 L60.4076097,19.1721122 L60.4076097,10.3518827 L67.3259005,10.3518827 C70.1790383,10.3518827 72.1679923,12.1677245 72.1679923,14.7621122 C72.1679923,17.3560408 70.1790383,19.1721122 67.3259005,19.1721122 L67.3259005,19.1721122 Z M86.3916658,3.30479082 L80.9012066,5.03361735 L80.9012066,35.2984133 L86.3916658,35.2984133 L86.3916658,3.30479082 Z M99.7506964,35.6014745 C102.43187,35.6014745 104.853145,34.6071122 106.668987,32.920301 L106.668987,35.2984133 L112.159446,35.2984133 L112.159446,13.7245867 L106.668987,13.7245867 L106.668987,16.1017806 C104.939242,14.3727245 102.560901,13.3783622 99.9676607,13.3783622 C94.3472526,13.3783622 89.2448036,18.0475714 89.2448036,24.4894592 C89.2448036,30.9313469 94.2602372,35.6014745 99.7506964,35.6014745 L99.7506964,35.6014745 Z M100.702355,30.6721378 C97.3737321,30.6721378 94.6923291,28.1211429 94.6923291,24.4894592 C94.6923291,20.8577755 97.3737321,18.3067806 100.702355,18.3067806 C104.074599,18.3067806 106.711921,20.8577755 106.711921,24.4894592 C106.711921,28.1211429 104.074599,30.6721378 100.702355,30.6721378 L100.702355,30.6721378 Z M137.755033,13.7245867 L132.004676,13.7245867 L125.864702,26.43525 L119.595926,13.7245867 L113.45687,13.7245867 L122.709191,32.5743061 L116.526513,44.8537959 L122.493145,44.8537959 L137.755033,13.7245867 Z M31.5123291,26.327801 L29.749523,23.5136939 L24.6027628,23.5136939 L26.368324,20.6945357 L27.9942934,20.6945357 L26.0289872,17.5564745 L20.5463342,26.327801 L5.91926786,26.327801 L9.44097704,20.6945357 L6.85508418,20.6945357 L8.61306888,17.8756071 L19.9195485,17.8756071 L18.1606454,20.6945357 L12.7679923,20.6945357 L11.0051862,23.5136939 L18.9823546,23.5136939 L26.0289872,12.2361429 L34.8354413,26.327801 L31.5123291,26.327801 Z M12.1361556,12.2361429 L23.7339872,12.2361429 L21.9711811,15.056449 L10.3744974,15.056449 L12.1361556,12.2361429 Z M20.1741658,4.59183673e-05 C9.03276276,4.59183673e-05 -6.8877551e-05,9.03333673 -6.8877551e-05,20.1754286 C-6.8877551e-05,31.3200459 9.03276276,40.3494337 20.1741658,40.3494337 C31.3153393,40.3494337 40.3495485,31.3200459 40.3495485,20.1754286 C40.3495485,9.03333673 31.3153393,4.59183673e-05 20.1741658,4.59183673e-05 L20.1741658,4.59183673e-05 Z"
              />
            </svg>
          </div>
          <Button url="#" className="bg-transparent mb-5 mt-5 m-auto">
            <div className="text-white lg:text-lg">Gioca gratis</div>
          </Button>
        </div>
      </div>
    </Section>
  );
}

export default EaPlay;
