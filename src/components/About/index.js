import React from 'react';
import ghalia from '../../assets/Ghalia/ghalia.jpg'
function About() {
    return (
        <div class="container">
        <div class="row">
        <div class="text-center">
        <img src={ghalia} className="img-thumbnail" alt="ghalia" />
    </div>
            <div class="col">
            Ghalia is an ambitious and friendly girl. She was born in Syria in 1989. Ghalia lived and grew up in Damascus until the age of 23. Her favorite hobby is to help needy people and see them happy. For that, she spends most of her free time in charities and organizations to support fresh refugees and immigrants. Ghalia always dreams to be a software developer to create and invent new technology programs which would help mankind. Her dream was paused when the war broke out in her country.
            Although Ghalia’s dreams and goals stopped for a while , Ghalia persisted to achieve her goal. She is applied for Rice University Boot Camp to achieve her goal. Ghalia is dedicated and persistent to reach her goal to be a successful web developed and achieve many applications and projects to help the mankind.
            </div>
        </div>
    </div>
    )
}

export default About;
