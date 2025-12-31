import { useState } from "react";
import { Link } from "react-router-dom";
import DoctorCard from "../components/DoctorCard";

import d1 from "../assets/img/health/prabhakar.jpg";
import d2 from "../assets/img/health/nikita.jpg";
import d3 from "../assets/img/health/nikita.jpg";
import PageHero from "../components/PageHero";

const doctorsData = [
    {
        id: 1,
        name: "Dr. Prabhakar Upadhyay",
        designation: "Consultant",
        department: "General & Laparoscopic Surgery",
        qualifications: ["MBBS, MS (Surgery)"],
        image: d1,
        slug: "prabhakar-upadhyay",
    },
    {
        id: 2,
        name: "Dr. Nikita Tiwari",
        designation: "Consultant",
        department: "Physician & Chest Specialist",
        qualifications: ["MBBS, MD (Medicine)"],
        image: d2,
        slug: "nikita-tiwari",
    },
    {
        id: 3,
        name: "Consultant Pediatrician",
        designation: "Consultant",
        department: "Child Health & Preventive Care",
        qualifications: ["MBBS, DCH"],
        image: d3,
        slug: "consultant-pediatrician",
    },
];

const alphabet = ["All", ..."ABCDEFGHIJKLMNOPQRSTUVWXYZ"];

const Doctors = () => {
    const [activeLetter, setActiveLetter] = useState("All");

    const filteredDoctors =
        activeLetter === "All"
            ? doctorsData
            : doctorsData.filter((d) =>
                d.name.toUpperCase().startsWith(activeLetter)
            );

    return (
        <main className="main">

            <main className="main">

                <PageHero
                    title="Doctors Directory"
                    breadcrumb={[
                        { label: "About Us", link: "/about" },
                        { label: "Doctors" },
                    ]}
                />

                {/* rest of page */}
            </main>


            {/* ===== FILTER ===== */}
            <section className="directory-filter">
                <div className="container">
                    <div className="alphabet-filter">
                        {alphabet.map((letter) => (
                            <button
                                key={letter}
                                className={letter === activeLetter ? "active" : ""}
                                onClick={() => setActiveLetter(letter)}
                            >
                                {letter}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== DOCTORS GRID ===== */}
            <section className="doctor-directory">
                <div className="container">
                    <div className="doctor-grid">
                        {filteredDoctors.map((doc) => (
                            <DoctorCard key={doc.id} doctor={doc} />
                        ))}
                    </div>
                </div>
            </section>

        </main>
    );
};

export default Doctors;
