import { Routes, Route } from "react-router-dom";
import { Main } from "../Main/Main";
import { NotFound } from "../NotFound/NotFound";
import { AboutClinic } from "../Clinic/AboutClinic";
import { WorkingHours } from "../Clinic/WorkingHours";
import { Licenses } from "../Clinic/Licenses";
import { Reviews } from "../Clinic/Reviews";
import { Therapy } from "../Directions/Therapy";
import { Urology } from "../Directions/Urology";
import { Gynecology } from "../Directions/Gynecology";
import { Surgery } from "../Directions/Surgery";
import { Neurology } from "../Directions/Neurology";
import { Otorhinolaryngology } from "../Directions/Otorhinolaryngology";
import { Ophthalmology } from "../Directions/Ophthalmology";
import { Dentistry } from "../Directions/Dentistry";
import { Therapist } from "../Specialists/Therapist";
import { Dentist } from "../Specialists/Dentist";
import { Surgeon } from "../Specialists/Surgeon";
import { Gynecologists } from "../Specialists/Gynecologists";
import { Ophthalmologist } from "../Specialists/Ophthalmologist";
import { Otolaryngologist } from "../Specialists/Otolaryngologist";
import { Urologist } from "../Specialists/Urologist";
import { Neurologist } from "../Specialists/Neurologist";
import { Contacts } from "../Contacts/Contacts";
import { –°onsultations } from "../PaidServices/Consultations";
import { RadioDiagnosis } from "../PaidServices/RadioDiagnosis";
import { EndoscopicDiagnostics } from "../PaidServices/EndoscopicDiagnostics"; 
import { UltrasoundDiagnostics } from "../PaidServices/UltrasoundDiagnostics";
import { MolecularGeneticStudy } from "../PaidServices/MolecularGeneticStudy";

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Main />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/about_clinic" element={<AboutClinic/>} />
            <Route path="/working_Hours" element={<WorkingHours/>} />
            <Route path="/licenses" element={<Licenses/>} />
            <Route path="/reviews" element={<Reviews/>} />
            <Route path="/therapy" element={<Therapy/>} />
            <Route path="/urology" element={<Urology/>} />
            <Route path="/gynecology" element={<Gynecology/>} />
            <Route path="/surgery" element={<Surgery/>} />
            <Route path="/neurology" element={<Neurology/>} />
            <Route path="/otorhinolaryngology" element={<Otorhinolaryngology/>} />
            <Route path="/ophthalmology" element={<Ophthalmology/>} />
            <Route path="/dentistry" element={<Dentistry/>} />
            <Route path="/therapist" element={<Therapist/>} />
            <Route path="/dentist" element={<Dentist/>} />
            <Route path="/gynecologists" element={<Gynecologists/>} />
            <Route path="/ophthalmologist" element={<Ophthalmologist/>} />
            <Route path="/otolaryngologist" element={<Otolaryngologist/>} />
            <Route path="/surgeon" element={<Surgeon/>} />
            <Route path="/urologist" element={<Urologist/>} />
            <Route path="/neurologist" element={<Neurologist/>} />
            <Route path="/contacts" element={<Contacts/>} />
            <Route path="/consultations" element={<–°onsultations/>} />
            <Route path="/radio_diagnosis" element={<RadioDiagnosis/>} />
            <Route path="/endoscopic_diagnostics" element={<EndoscopicDiagnostics/>} />
            <Route path="/ultrasound_diagnostics" element={<UltrasoundDiagnostics/>} />
            <Route path="/molecular_genetic_study" element={<MolecularGeneticStudy/>} />

        </Routes>
    )
}
