import { useState } from "react";
import { GrStatusGood } from "react-icons/gr";
import "./Research.css";
import N_L_P from "../../Research_Pages/NLP";

const Research = () => {
  const [showModal, setShowModal] = useState(false); // State to control the visibility of the modal
  const [selectedItem, setSelectedItem] = useState(null); // State to store the selected item

  // Function to handle the click event of "View more" link
  const handleViewMore = (item) => {
    setSelectedItem(item);
    setShowModal(true);
  };

  // Function to render content based on the selectedItem
  const renderContent = () => {
    if (selectedItem === null) {
      return null;
    } else if (typeof selectedItem === "string") {
      // If selectedItem is a URL string, render an anchor tag
      return (
        <a href={selectedItem} target="_blank" rel="noopener noreferrer">
          {selectedItem}
        </a>
      );
    } else {
      // If selectedItem is a React component, render it directly
      return selectedItem;
    }
  };

  return (
    <section className="section ser" id="research">
      <div className="confernce_div-main container">
        <h1 className="section_title">Research Papers</h1>
        <span className="section_subtitle">
          International Conferences and Journal Research Papers
        </span>
        <ul>
          {/* First Data Item */}
          <li>
            <h2>
              <GrStatusGood style={{ marginRight: "5px" }} />
              Arabic natural language processing for Qur’anic research
            </h2>
            <p>
              Arabic natural language processing for Qur’anic research: a
              systematic review Muhammad Huzaifa Bashir, Aqil M. Azmi, Haq
              Nawaz, Wajdi Zaghouani, Mona Diab, Ala Al-Fuqaha & Junaid Qadir
              Ahmed Wasfey Sleem, Eman Mohammed lotfy Elrefai, Marwa Mohammed
              Matar and Haq Nawaz. Stars at Qur'an QA 2022: Building Automatic
              Extractive Question Answering Systems for the Holy Qur'an with
              TransformerModels and Releasing a New Dataset.Qur'an QA 2022
              Shared Task! Answering Questions on the Holy Qur'an @ OSACT 2022
              Workshop, LREC 2022 M arseille, France, 20th June 2022
            </p>
            <a onClick={() => handleViewMore(<N_L_P />)}>View more</a>
          </li>

          {/* Second Data Item */}
          <li>
            <h2>
              <GrStatusGood style={{ marginRight: "5px" }} />
              Classical Arabic Conjugation Android Application
            </h2>
            <p>
              8th International Conference on Islamic Applications in Computer
              Science and Technologies (IMAN 2020)26 – 27 December 2020 Online
            </p>
            <a
              href="https://play.google.com/store/apps/details?id=com.islamiculoom.tasreefapp"
              onClick={() => handleViewMore()}
            >
              View more
            </a>
          </li>

          {/* Third Data Item */}
          <li>
            <h2>
              <GrStatusGood style={{ marginRight: "5px" }} />
              SENTIMENTAL ANALYSIS OF SOCIAL MEDIA TO FIND OUT CUSTOMER OPINION.
            </h2>
            <p>
              International Conference on Intelligent Technologies and
              Applications INTAP 2018 October 23–25, 2018 | Bahawalpur,
              Pakistan.
            </p>
            <a
              href="https://www.springer.com/gp/book/9789811360510"
              onClick={() => handleViewMore()}
            >
              View more
            </a>
          </li>
          {/* Four Data Item */}
          <li>
            <h2>
              <GrStatusGood style={{ marginRight: "5px" }} />
              DEVELOPMENT OF ARTIFICIAL INTELLIGENCE BASE SYSTEM
            </h2>
            <p>
              ARABIC & QUR'ANIC VOCABULARIES FOR URDU LANGUAGE USERS Vol 10 No 1
              (2018): QURANICA - International Journal of Quranic Research
              Volume 10, Number 1 (June 2018) Published: 2018-06-26.
            </p>
            <a
              href="https://ejournal.um.edu.my/index.php/quranica/article/view/12108"
              onClick={() => handleViewMore()}
            >
              View more
            </a>
          </li>
          {/* Five Data Item */}
          <li>
            <h2>
              <GrStatusGood style={{ marginRight: "5px" }} />
              DATA SET GENERATION FOR THE ATTRIBUTES OF THE WORDS OF THE HOLY
              QURAN
            </h2>
            <p>
              INFORMATION RETRIEVAL SYSTEM FOR E-LEARNING Taibah University
              International Conference on Advances in Information Technology for
              the Holy Quran and Its Sciences Al-Madinah Al-Munawwarah, Saudi
              Arabia 19-22 Safar(2) 1435 Hijri (22-25 December 2013)
            </p>
            <a
              href="https://ieeexplore.ieee.org/document/7277250"
              onClick={() => handleViewMore()}
            >
              View more
            </a>
          </li>
          {/* SIX Data Item */}
          <li>
            <h2>
              <GrStatusGood style={{ marginRight: "5px" }} />
              DEVELOPMENT AND IMPLEMENTATION OF A COMPUTATIONAL ALGORITHM
            </h2>
            <p>
              DEVELOPMENT AND IMPLEMENTATION OF A COMPUTATIONAL ALGORITHM TO
              PREDICT THE CLASSICAL ARABIC CONJUGATE PATTERN FOCUSING ON WEAK
              VERBS. Second Workshop on Arabic Corpus Linguistics (WACL-2)
              Workshop in conjunction with the Corpus Linguistics 2013
              conference Monday 22nd July 2013 – Lancaster University, UK
            </p>
            <a
              href="http://ucrel.lancs.ac.uk/cl2013/wacl2.php"
              onClick={() => handleViewMore()}
            >
              View more
            </a>
          </li>
        </ul>
      </div>
      {/* Modal */}
      {showModal && (
        <div className="show-modal">
          <div className="modal">
            <span className="modal-span" onClick={() => setShowModal(false)}>
              &times;
            </span>
            {renderContent()}
          </div>
        </div>
      )}
    </section>
  );
};

export default Research;
