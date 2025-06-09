import React from 'react';
import { Carousel, Card, Row, Col, Image } from 'react-bootstrap';
import '../styles/CommitteeCarousel.css'

const committeeMembers = [
  { name: "Sanskruti Patharekar", instagram: "@s_kruti26", post: "President", image: "/images/members/background.jpeg" },
  { name: "Ritesh Ukade", instagram: "@rit_ukade27", post: "Vice President", image: "/images/members/ritesh.jpeg" },
  { name: "Nandini Lahare", instagram: "@nandini_lahare", post: "Vice President", image: "/images/members/background.jpeg" },
  { name: "Tejas Khilari", instagram: "@tejas_k2610", post: "Treasurer", image: "/images/members/tejas.jpeg" },
  { name: "Rajgauri Parkhe", instagram: "@gauri", post: "Treasurer", image: "/images/members/background.jpeg" },
  { name: "Uday Badhe", instagram: "@uday_badhe_07", post: "Publicity Committee", image: "/images/members/uday.jpeg" },
  { name: "Revati Gadge", instagram: "@revati_05_", post: "Discipline Committee", image: "/images/members/background.jpeg" },
  { name: "Sumitra Deokar", instagram: "@sumitra_deokar4745", post: "Sports Committee", image: "/images/members/background.jpeg" },
  { name: "Manas Kharde", instagram: "@manas_kharde_07", post: "Food Committee", image: "/images/members/manas.png" },
  { name: "Pravin Khamkar", instagram: "@_pravin_khamkar", post: "Social Media", image: "/images/members/background.jpeg" },
  { name: "Omkar Warkhade", instagram: "", post: "Technical Event Committee", image: "/images/members/background.jpeg" },
  { name: "Shravani Wable", instagram: "@shravnii_aw1610", post: "Food Committee", image: "/images/members/background.jpeg" },
  { name: "Aditi Kadu", instagram: "@_aaditi_", post: "Cultural Head", image: "/images/members/background.jpeg" },
  { name: "Nikita Shende", instagram: "@Nik01", post: "Cultural Head", image: "/images/members/background.jpeg" },
  { name: "Yash Navale", instagram: "@__yasssshhhh___", post: "Discipline Committee", image: "/images/members/background.jpeg" },
  { name: "Anirudha Sahane", instagram: "@sahane_anirudha", post: "Cultural Head", image: "/images/members/background.jpeg" },
  { name: "Akanksha Ghule", instagram: "@akanksha01", post: "Discipline Committee", image: "/images/members/background.jpeg" },
  { name: "Rohini Dighe", instagram: "@rohini_dighe1", post: "Publicity Committee", image: "/images/members/background.jpeg" },
  { name: "Gayatri Murkute", instagram: "@gayatri_m", post: "Decoration Committee", image: "/images/members/background.jpeg" },
  { name: "Sanskruti Nirmal", instagram: "@s_nirmal", post: "Games Committee", image: "/images/members/background.jpeg" },
  { name: "Apurva Tembhare", instagram: "@apurva90", post: "Games Committee", image: "/images/members/background.jpeg" },
  { name: "Arti Jagtap", instagram: "@arti_jagtap", post: "Games Committee", image: "/images/members/background.jpeg" },
  { name: "Aditya Kahandal", instagram: "@kahandaladitya", post: "Games Committee", image: "/images/members/background.jpeg" },
  { name: "Anushka Aher", instagram: "@anushkaaher3", post: "Food Committee", image: "/images/members/background.jpeg" },
  { name: "Anjali Lavande", instagram: "@anjali01", post: "Team Anchoring", image: "/images/members/background.jpeg" },
  { name: "Juili Chaudhari", instagram: "@juiliiii", post: "Team Anchoring", image: "/images/members/background.jpeg" },
  { name: "Pradeep Khendake", instagram: "@pradeep_khendake", post: "Sports Committee", image: "/images/members/background.jpeg" },
  { name: "Gurudatta Irale", instagram: "@guru.123", post: "Sports Committee", image: "/images/members/background.jpeg" },
  { name: "Rutuja Garje", instagram: "@rutuja_garje", post: "Sports Committee", image: "/images/members/background.jpeg" },
  { name: "Pranjal Malpani", instagram: "@pranjal_01", post: "Technical Team", image: "/images/members/background.jpeg" },
  { name: "Harsh Chandak", instagram: "@__.harshh_28", post: "Technical Team", image: "/images/members/background.jpeg" },
];

// Group into batches of 3
const chunkArray = (arr, size) =>
  arr.reduce((acc, _, i) =>
    i % size === 0 ? [...acc, arr.slice(i, i + size)] : acc, []);

const CommitteeCarousel = () => {
  const memberGroups = chunkArray(committeeMembers, 3);

  return (
    <Carousel indicators={false} interval={null}>
      {memberGroups.map((group, idx) => (
        <Carousel.Item key={idx}>
          <div className="d-flex justify-content-center">
            <Row className="w-100 justify-content-center">
              {group.map((member, i) => (
                <Col md={4} sm={6} xs={12} key={i} className="mb-4 d-flex justify-content-center">
                  <Card className="p-3 shadow-lg committee-card d-flex flex-column justify-content-between" style={{ width: '100%', maxWidth: '250px', height: '200px', border:'3px solid bisque'}}>
                    <Row className="align-items-center">
                      <Col xs={4} className="text-center">
                        <Image src={member.image} roundedCircle width={70} height={70} />
                      </Col>
                      <Col xs={8}>
                        <h6>{member.name}</h6>
                        <p className="text-muted mb-1" style={{ fontSize: "0.9em" }}>{member.instagram}</p>
                      </Col>
                    </Row>
                    <div className="text-center mt-2">
                      <strong>{member.post}</strong>
                    </div>
                  </Card>
                </Col>
              ))}
            </Row>
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default CommitteeCarousel;
