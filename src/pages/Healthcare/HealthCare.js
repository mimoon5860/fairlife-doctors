import React from 'react';
import "./HealthCare.css"
import cover from "../../images/healthcare-cover.jpg"
import img1 from "../../images/healthcare/img1.jpg"
import img2 from "../../images/healthcare/img2.webp"
import img3 from "../../images/healthcare/img3.jpg"
import img4 from "../../images/healthcare/img4.jpg"
import img5 from "../../images/healthcare/img5.webp"
import img6 from "../../images/healthcare/img6.jpg"
import img7 from "../../images/healthcare/img7.webp"
import img8 from "../../images/healthcare/img8.webp"
import img9 from "../../images/healthcare/img9.webp"
import img10 from "../../images/healthcare/img10.webp"

const HealthCare = () => {
    return (
        <div className="healthcare-bg">
            <div className="container text-white">
                <div className="py-3">
                    <h3 className="fw-bold fs-1"> We Care About Your Health!</h3>
                    <img className="my-2 img-fluid healthcare-cover" src={cover} alt="" />
                </div>
                <div>
                    <h1 className="fw-bold text-light border-bottom pb-2 border-3">10 health tips for 2021</h1>
                    <p className="col-md-6">
                        The start of a new decade brings with it new resolutions to improve one’s life, including a healthier lifestyle. Here are 10 practical health tips to help you start off towards healthy living in 2021.
                    </p>
                </div>
                <div className="col-md-6 py-3">
                    <div className="my-4 p-3  ">
                        <h2 className="fw-bold">1. Eat a healthy diet</h2>
                        <img className="healthcare-img img-fluid" src={img1} alt="" />
                        <p className="p-3 healthcare-text">Eat a combination of different foods, including fruit, vegetables, legumes, nuts and whole grains. Adults should eat at least five portions (400g) of fruit and vegetables per day. You can improve your intake of fruits and vegetables by always including veggies in your meal; eating fresh fruit and vegetables as snacks; eating a variety of fruits and vegetables; and eating them in season. By eating healthy, you will reduce your risk of malnutrition and noncommunicable diseases (NCDs) such as diabetes, heart disease, stroke and cancer.</p>
                    </div>
                    <div className="my-4 p-3  ">
                        <h2 className="fw-bold">2. Consume less salt and sugar </h2>
                        <img className="healthcare-img img-fluid" src={img2} alt="" />
                        <p className="p-3 healthcare-text">Filipinos consume twice the recommended amount of sodium, putting them at risk of high blood pressure, which in turn increases the risk of heart disease and stroke. Most people get their sodium through salt. Reduce your salt intake to 5g per day, equivalent to about one teaspoon. It’s easier to do this by limiting the amount of salt, soy sauce, fish sauce and other high-sodium condiments when preparing meals; removing salt, seasonings and condiments from your meal table; avoiding salty snacks; and choosing low-sodium products.</p>
                    </div>
                    <div className="my-4 p-3  ">
                        <h2 className="fw-bold">3. Reduce intake of harmful fats</h2>
                        <img className="healthcare-img img-fluid" src={img3} alt="" />
                        <p className="p-3 healthcare-text">Fats consumed should be less than 30% of your total energy intake. This will help prevent unhealthy weight gain and NCDs. There are different types of fats, but unsaturated fats are preferable over saturated fats and trans-fats. WHO recommends reducing saturated fats to less than 10% of total energy intake; reducing trans-fats to less than 1% of total energy intake; and replacing both saturated fats and trans-fats to unsaturated fats.</p>
                    </div>
                    <div className="my-4 p-3  ">
                        <h2 className="fw-bold">4. Avoid harmful use of alcohol</h2>
                        <img className="healthcare-img img-fluid" src={img4} alt="" />
                        <p className="p-3 healthcare-text">There is no safe level for drinking alcohol. Consuming alcohol can lead to health problems such as mental and behavioural disorders, including alcohol dependence, major NCDs such as liver cirrhosis, some cancers and heart diseases, as well as injuries resulting from violence and road clashes and collisions.</p>
                    </div>
                    <div className="my-4 p-3  ">
                        <h2 className="fw-bold">5. Don’t smoke</h2>
                        <img className="healthcare-img img-fluid" src={img5} alt="" />
                        <p className="p-3 healthcare-text">Smoking tobacco causes NCDs such as lung disease, heart disease and stroke. Tobacco kills not only the direct smokers but even non-smokers through second-hand exposure. Currently, there are around 15.9 million Filipino adults who smoke tobacco but 7 in 10 smokers are interested or plan to quit.
                            If you are currently a smoker, it’s not too late to quit. Once you do, you will experience immediate and long-term health benefits. If you are not a smoker, that’s great! Do not start smoking and fight for your right to breathe tobacco-smoke-free air.
                        </p>
                    </div>
                    <div className="my-4 p-3  ">
                        <h2 className="fw-bold">6. Be active</h2>
                        <img className="healthcare-img img-fluid" src={img6} alt="" />
                        <p className="p-3 healthcare-text">Physical activity is defined as any bodily movement produced by skeletal muscles that requires energy expenditure. This includes exercise and activities undertaken while working, playing, carrying out household chores, travelling, and engaging in recreational pursuits. The amount of physical activity you need depends on your age group but adults aged 18-64 years should do at least 150 minutes of moderate-intensity physical activity throughout the week. Increase moderate-intensity physical activity to 300 minutes per week for additional health benefits.</p>
                    </div>
                    <div className="my-4 p-3  ">
                        <h2 className="fw-bold">7. Check your blood pressure regularly</h2>
                        <img className="healthcare-img img-fluid" src={img7} alt="" />
                        <p className="p-3 healthcare-text">Hypertension, or high blood pressure, is called a “silent killer”. This is because many people who have hypertension may not be aware of the problem as it may not have any symptoms. If left uncontrolled, hypertension can lead to heart, brain, kidney and other diseases. Have your blood pressure checked regularly by a health worker so you know your numbers. If your blood pressure is high, get the advice of a health worker. This is vital in the prevention and control of hypertension</p>
                    </div>
                    <div className="my-4 p-3  ">
                        <h2 className="fw-bold">8. Get tested</h2>
                        <img className="healthcare-img img-fluid" src={img8} alt="" />
                        <p className="p-3 healthcare-text">Getting yourself tested is an important step in knowing your health status, especially when it comes to HIV, hepatitis B, sexually-transmitted infections (STIs) and tuberculosis (TB). Left untreated, these diseases can lead to serious complications and even death. Knowing your status means you will know how to either continue preventing these diseases or, if you find out that you’re positive, get the care and treatment that you need. Go to a public or private health facility, wherever you are comfortable, to have yourself tested.</p>
                    </div>
                    <div className="my-4 p-3  ">
                        <h2 className="fw-bold">9. Get vaccinated</h2>
                        <img className="healthcare-img img-fluid" src={img9} alt="" />
                        <p className="p-3 healthcare-text">Vaccination is one of the most effective ways to prevent diseases. Vaccines work with your body’s natural defences to build protection against diseases like cervical cancer, cholera, diphtheria, hepatitis B, influenza, measles, mumps, pneumonia, polio, rabies, rubella, tetanus, typhoid, and yellow fever.

                            In the Philippines, free vaccines are provided to children 1 year old and below as part of the Department of Health’s routine immunization programme. If you are an adolescent or adult, you may ask your physician if to check your immunization status or if you want to have yourself vaccinated.</p>
                    </div>
                    <div className="my-4 p-3  ">
                        <h2 className="fw-bold">10. Practice safe sex</h2>
                        <img className="healthcare-img img-fluid" src={img10} alt="" />
                        <p className="p-3 healthcare-text">Looking after your sexual health is important for your overall health and well-being. Practice safe sex to prevent HIV and other sexually transmitted infections like gonorrhoea and syphilis. There are available prevention measures such as pre-exposure prophylaxis (PrEP) that will protect you from HIV and condoms that will protect you from HIV and other STIs.</p>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default HealthCare;