import { useState } from 'react';
import { FileText, CheckCircle, Calendar, UserPlus, Download, Phone, Mail } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import { supabase } from '../lib/supabase';
import admissionImage from '../assets/images/admission.jpeg';

const admissionSteps = [
  {
    icon: FileText,
    title: 'Submit Inquiry',
    description: 'Fill out our online inquiry form with your details'
  },
  {
    icon: Calendar,
    title: 'Schedule Visit',
    description: 'Tour our facilities and meet our staff'
  },
  {
    icon: UserPlus,
    title: 'Complete Application',
    description: 'Submit required documents and application fee'
  },
  {
    icon: CheckCircle,
    title: 'Enrollment',
    description: 'Receive acceptance and complete enrollment'
  }
];

const requirements = [
  'Birth certificate of the child',
  'Recent passport-sized photographs (4 copies)',
  'Immunization records',
  'Previous school report cards (if applicable)',
  'Parent/Guardian identification',
  'Proof of residence'
];

export default function Admissions() {
  const [formData, setFormData] = useState({
    // Pupil's Personal Details
    surname: '',
    otherNames: '',
    namesUsedAtHome: '',
    dateOfBirth: '',
    homeTown: '',
    motherTongue: '',
    
    // Parent/Guardian Information
    fatherName: '',
    fatherOccupation: '',
    motherName: '',
    motherOccupation: '',
    guardian: '',
    guardianOccupation: '',
    address: '',
    fatherNumber: '',
    motherNumber: '',
    
    // Educational History
    school1: '',
    class1: '',
    school2: '',
    class2: '',
    school3: '',
    class3: '',
    formerClass: '',
    presentClass: '',
    
    // Child's Living Arrangement
    livingWith: 'bothParents', // 'bothParents', 'mother', 'father', 'guardian'
    
    // Medical Information
    medicalProblems: '',
    
    // Agreement
    agreedToTerms: false,
    
    // Signature
    signature: '',
    date: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const { error } = await supabase.from('admission_inquiries').insert([
        {
          // Pupil's Personal Details
          surname: formData.surname,
          other_names: formData.otherNames,
          names_used_at_home: formData.namesUsedAtHome,
          date_of_birth: formData.dateOfBirth,
          home_town: formData.homeTown,
          mother_tongue: formData.motherTongue,
          
          // Parent/Guardian Information
          father_name: formData.fatherName,
          father_occupation: formData.fatherOccupation,
          mother_name: formData.motherName,
          mother_occupation: formData.motherOccupation,
          guardian: formData.guardian,
          guardian_occupation: formData.guardianOccupation,
          address: formData.address,
          father_number: formData.fatherNumber,
          mother_number: formData.motherNumber,
          
          // Educational History
          school1: formData.school1,
          class1: formData.class1,
          school2: formData.school2,
          class2: formData.class2,
          school3: formData.school3,
          class3: formData.class3,
          former_class: formData.formerClass,
          present_class: formData.presentClass,
          
          // Child's Living Arrangement
          living_with: formData.livingWith,
          
          // Medical Information
          medical_problems: formData.medicalProblems,
          
          // Agreement
          agreed_to_terms: formData.agreedToTerms,
          
          // Signature
          signature: formData.signature,
          date: formData.date
        }
      ]);

      if (error) throw error;

      setSubmitStatus('success');
      // Reset form
      setFormData({
        surname: '',
        otherNames: '',
        namesUsedAtHome: '',
        dateOfBirth: '',
        homeTown: '',
        motherTongue: '',
        fatherName: '',
        fatherOccupation: '',
        motherName: '',
        motherOccupation: '',
        guardian: '',
        guardianOccupation: '',
        address: '',
        fatherNumber: '',
        motherNumber: '',
        school1: '',
        class1: '',
        school2: '',
        class2: '',
        school3: '',
        class3: '',
        formerClass: '',
        presentClass: '',
        livingWith: 'bothParents',
        medicalProblems: '',
        agreedToTerms: false,
        signature: '',
        date: ''
      });
    } catch (error) {
      console.error('Error submitting registration:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="animate-fade-in">
      <div className="relative h-[300px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-royal-900/80 to-royal-800/60 z-10" />
        <img
          src={admissionImage}
          alt="Admissions at Fountain Gate Academy"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 z-20 flex items-center justify-center">
          <div className="text-center text-white px-4 max-w-4xl animate-slide-up">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Admissions</h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Join the Fountain Gate Academy family and give your child the gift of quality education from ages 1 year and above
            </p>
          </div>
        </div>
      </div>

      <section className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Admission Process"
            subtitle="Four simple steps to enroll your child"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {admissionSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div
                  key={index}
                  className="relative animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="bg-gradient-to-br from-royal-50 to-blue-50 dark:from-gray-800 dark:to-gray-700 p-8 rounded-2xl shadow-lg transition-colors duration-300 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-royal-200">
                    <div className="bg-gradient-to-br from-royal-600 to-royal-700 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="absolute -top-4 -left-4 bg-tomato-500 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg shadow-lg">
                      {index + 1}
                    </div>
                    <h3 className="text-xl font-bold text-royal-800 mb-3 text-center">{step.title}</h3>
                    <p className="text-gray-600 text-center">{step.description}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="animate-slide-up">
              <div className="bg-gradient-to-br from-tomato-50 to-amber-50 dark:from-gray-800 dark:to-gray-700 p-8 rounded-3xl shadow-lg mb-8 transition-colors duration-300">
                <h2 className="text-3xl font-bold text-royal-800 dark:text-royal-300 mb-6">Required Documents</h2>
                <ul className="space-y-4">
                  {requirements.map((req, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-tomato-600 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 dark:text-gray-300 text-lg">{req}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-gradient-to-br from-royal-700 to-royal-800 dark:from-gray-800 dark:to-gray-900 text-white p-8 rounded-3xl shadow-lg transition-colors duration-300">
                <h3 className="text-2xl font-bold mb-4">Download Prospectus</h3>
                <p className="text-gray-200 mb-6">
                  Get detailed information about our programs, fees, and facilities.
                </p>
                <button className="bg-tomato-500 hover:bg-tomato-600 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 shadow-lg flex items-center space-x-2">
                  <Download className="w-5 h-5" />
                  <span>Download Prospectus (PDF)</span>
                </button>
              </div>
            </div>

            <div className="animate-fade-in">
              <div className="bg-white dark:bg-gray-800 border-2 border-royal-200 dark:border-gray-700 rounded-3xl shadow-lg p-8 transition-colors duration-300">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold text-royal-800 mb-2">PUPILS REGISTRATION FORM</h2>
                  <p className="text-lg text-gray-600">FOUNTAIN GATE ACADEMY</p>
                  <p className="text-sm text-gray-500">GHANA EDUCATION SERVICE</p>
                </div>

                {submitStatus === 'success' && (
                  <div className="bg-green-50 border-2 border-green-500 text-green-700 p-4 rounded-xl mb-6 flex items-center">
                    <CheckCircle className="w-6 h-6 mr-3 flex-shrink-0" />
                    <p>Thank you! Your registration form has been submitted successfully. We will contact you soon.</p>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="bg-red-50 border-2 border-red-500 text-red-700 p-4 rounded-xl mb-6">
                    <p>Sorry, there was an error submitting your registration. Please try again.</p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Pupil's Personal Details */}
                  <div className="border-b-2 border-gray-200 pb-6">
                    <h3 className="text-xl font-bold text-royal-800 mb-4">Pupil's Personal Details</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-gray-700 dark:text-gray-300 font-semibold mb-2">SURNAME *</label>
                        <input
                          type="text"
                          name="surname"
                          value={formData.surname}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border-2 border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200 rounded-xl focus:border-royal-500 focus:outline-none transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-gray-700 dark:text-gray-300 font-semibold mb-2">OTHER NAMES *</label>
                        <input
                          type="text"
                          name="otherNames"
                          value={formData.otherNames}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border-2 border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200 rounded-xl focus:border-royal-500 focus:outline-none transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-gray-700 dark:text-gray-300 font-semibold mb-2">NAMES USED FOR THE CHILD AT HOME</label>
                        <input
                          type="text"
                          name="namesUsedAtHome"
                          value={formData.namesUsedAtHome}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border-2 border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200 rounded-xl focus:border-royal-500 focus:outline-none transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-gray-700 dark:text-gray-300 font-semibold mb-2">DATE OF BIRTH *</label>
                        <input
                          type="date"
                          name="dateOfBirth"
                          value={formData.dateOfBirth}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border-2 border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200 rounded-xl focus:border-royal-500 focus:outline-none transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-gray-700 dark:text-gray-300 font-semibold mb-2">HOME TOWN</label>
                        <input
                          type="text"
                          name="homeTown"
                          value={formData.homeTown}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border-2 border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200 rounded-xl focus:border-royal-500 focus:outline-none transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-gray-700 dark:text-gray-300 font-semibold mb-2">MOTHER TONGUE</label>
                        <input
                          type="text"
                          name="motherTongue"
                          value={formData.motherTongue}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border-2 border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200 rounded-xl focus:border-royal-500 focus:outline-none transition-colors"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Parent/Guardian Information */}
                  <div className="border-b-2 border-gray-200 pb-6">
                    <h3 className="text-xl font-bold text-royal-800 mb-4">Parent/Guardian Information</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-gray-700 dark:text-gray-300 font-semibold mb-2">FATHER'S NAME</label>
                        <input
                          type="text"
                          name="fatherName"
                          value={formData.fatherName}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border-2 border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200 rounded-xl focus:border-royal-500 focus:outline-none transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-gray-700 dark:text-gray-300 font-semibold mb-2">FATHER'S OCCUPATION</label>
                        <input
                          type="text"
                          name="fatherOccupation"
                          value={formData.fatherOccupation}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border-2 border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200 rounded-xl focus:border-royal-500 focus:outline-none transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-gray-700 dark:text-gray-300 font-semibold mb-2">MOTHER'S NAME</label>
                        <input
                          type="text"
                          name="motherName"
                          value={formData.motherName}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border-2 border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200 rounded-xl focus:border-royal-500 focus:outline-none transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-gray-700 dark:text-gray-300 font-semibold mb-2">MOTHER'S OCCUPATION</label>
                        <input
                          type="text"
                          name="motherOccupation"
                          value={formData.motherOccupation}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border-2 border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200 rounded-xl focus:border-royal-500 focus:outline-none transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-gray-700 dark:text-gray-300 font-semibold mb-2">GUARDIAN</label>
                        <input
                          type="text"
                          name="guardian"
                          value={formData.guardian}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border-2 border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200 rounded-xl focus:border-royal-500 focus:outline-none transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-gray-700 dark:text-gray-300 font-semibold mb-2">GUARDIAN OCCUPATION</label>
                        <input
                          type="text"
                          name="guardianOccupation"
                          value={formData.guardianOccupation}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border-2 border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200 rounded-xl focus:border-royal-500 focus:outline-none transition-colors"
                        />
                      </div>
                      <div className="md:col-span-2">
                        <label className="block text-gray-700 dark:text-gray-300 font-semibold mb-2">ADDRESS *</label>
                        <textarea
                          name="address"
                          value={formData.address}
                          onChange={handleChange}
                          required
                          rows={2}
                          className="w-full px-4 py-3 border-2 border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200 rounded-xl focus:border-royal-500 focus:outline-none transition-colors resize-none"
                        />
                      </div>
                      <div>
                        <label className="block text-gray-700 dark:text-gray-300 font-semibold mb-2">FATHER'S NUMBER</label>
                        <input
                          type="tel"
                          name="fatherNumber"
                          value={formData.fatherNumber}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border-2 border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200 rounded-xl focus:border-royal-500 focus:outline-none transition-colors"
                          placeholder="e.g., 0500000477"
                        />
                      </div>
                      <div>
                        <label className="block text-gray-700 dark:text-gray-300 font-semibold mb-2">MOTHER'S NUMBER</label>
                        <input
                          type="tel"
                          name="motherNumber"
                          value={formData.motherNumber}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border-2 border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200 rounded-xl focus:border-royal-500 focus:outline-none transition-colors"
                          placeholder="e.g., 0244374192"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Educational History */}
                  <div className="border-b-2 border-gray-200 pb-6">
                    <h3 className="text-xl font-bold text-royal-800 mb-4">Educational History</h3>
                    <div className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                          <label className="block text-gray-700 dark:text-gray-300 font-semibold mb-2">SCHOOLS ATTENDED a)</label>
                          <input
                            type="text"
                            name="school1"
                            value={formData.school1}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border-2 border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200 rounded-xl focus:border-royal-500 focus:outline-none transition-colors"
                          />
                        </div>
                        <div>
                          <label className="block text-gray-700 dark:text-gray-300 font-semibold mb-2">CLASS</label>
                          <input
                            type="text"
                            name="class1"
                            value={formData.class1}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border-2 border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200 rounded-xl focus:border-royal-500 focus:outline-none transition-colors"
                          />
                        </div>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                          <label className="block text-gray-700 dark:text-gray-300 font-semibold mb-2">SCHOOLS ATTENDED b)</label>
                          <input
                            type="text"
                            name="school2"
                            value={formData.school2}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border-2 border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200 rounded-xl focus:border-royal-500 focus:outline-none transition-colors"
                          />
                        </div>
                        <div>
                          <label className="block text-gray-700 dark:text-gray-300 font-semibold mb-2">CLASS</label>
                          <input
                            type="text"
                            name="class2"
                            value={formData.class2}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border-2 border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200 rounded-xl focus:border-royal-500 focus:outline-none transition-colors"
                          />
                        </div>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                          <label className="block text-gray-700 dark:text-gray-300 font-semibold mb-2">SCHOOLS ATTENDED c)</label>
                          <input
                            type="text"
                            name="school3"
                            value={formData.school3}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border-2 border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200 rounded-xl focus:border-royal-500 focus:outline-none transition-colors"
                          />
                        </div>
                        <div>
                          <label className="block text-gray-700 dark:text-gray-300 font-semibold mb-2">CLASS</label>
                          <input
                            type="text"
                            name="class3"
                            value={formData.class3}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border-2 border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200 rounded-xl focus:border-royal-500 focus:outline-none transition-colors"
                          />
                        </div>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-gray-700 dark:text-gray-300 font-semibold mb-2">FORMER CLASS</label>
                          <input
                            type="text"
                            name="formerClass"
                            value={formData.formerClass}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border-2 border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200 rounded-xl focus:border-royal-500 focus:outline-none transition-colors"
                          />
                        </div>
                        <div>
                          <label className="block text-gray-700 dark:text-gray-300 font-semibold mb-2">PRESENT CLASS *</label>
                          <select
                            name="presentClass"
                            value={formData.presentClass}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 border-2 border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200 rounded-xl focus:border-royal-500 focus:outline-none transition-colors bg-white"
                          >
                            <option value="">Select class</option>
                            <option value="Creche">Creche</option>
                            <option value="Nursery">Nursery</option>
                            <option value="Kindergarten">Kindergarten</option>
                            <option value="Primary 1">Primary 1</option>
                            <option value="Primary 2">Primary 2</option>
                            <option value="Primary 3">Primary 3</option>
                            <option value="Primary 4">Primary 4</option>
                            <option value="Primary 5">Primary 5</option>
                            <option value="Primary 6">Primary 6</option>
                            <option value="JHS 1">JHS 1</option>
                            <option value="JHS 2">JHS 2</option>
                            <option value="JHS 3">JHS 3</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Child's Living Arrangement */}
                  <div className="border-b-2 border-gray-200 pb-6">
                    <h3 className="text-xl font-bold text-royal-800 mb-4">IS THE CHILD WITH:</h3>
                    <div className="flex flex-wrap gap-6">
                      <label className="flex items-center space-x-2 cursor-pointer">
                        <input
                          type="radio"
                          name="livingWith"
                          value="bothParents"
                          checked={formData.livingWith === 'bothParents'}
                          onChange={handleChange}
                          className="w-5 h-5 text-royal-600 focus:ring-royal-500"
                        />
                        <span className="text-gray-700 dark:text-gray-300 font-semibold">BOTH PARENTS</span>
                      </label>
                      <label className="flex items-center space-x-2 cursor-pointer">
                        <input
                          type="radio"
                          name="livingWith"
                          value="mother"
                          checked={formData.livingWith === 'mother'}
                          onChange={handleChange}
                          className="w-5 h-5 text-royal-600 focus:ring-royal-500"
                        />
                        <span className="text-gray-700 dark:text-gray-300 font-semibold">MOTHER</span>
                      </label>
                      <label className="flex items-center space-x-2 cursor-pointer">
                        <input
                          type="radio"
                          name="livingWith"
                          value="father"
                          checked={formData.livingWith === 'father'}
                          onChange={handleChange}
                          className="w-5 h-5 text-royal-600 focus:ring-royal-500"
                        />
                        <span className="text-gray-700 dark:text-gray-300 font-semibold">FATHER</span>
                      </label>
                      <label className="flex items-center space-x-2 cursor-pointer">
                        <input
                          type="radio"
                          name="livingWith"
                          value="guardian"
                          checked={formData.livingWith === 'guardian'}
                          onChange={handleChange}
                          className="w-5 h-5 text-royal-600 focus:ring-royal-500"
                        />
                        <span className="text-gray-700 dark:text-gray-300 font-semibold">GUARDIAN</span>
                      </label>
                    </div>
                  </div>

                  {/* Medical Information */}
                  <div className="border-b-2 border-gray-200 pb-6">
                    <h3 className="text-xl font-bold text-royal-800 mb-4">LIST ANY MEDICAL PROBLEMS e.g. ALLERGIES</h3>
                    <textarea
                      name="medicalProblems"
                      value={formData.medicalProblems}
                      onChange={handleChange}
                      rows={3}
                      className="w-full px-4 py-3 border-2 border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200 rounded-xl focus:border-royal-500 focus:outline-none transition-colors resize-none"
                      placeholder="Enter any medical problems or allergies..."
                    />
                  </div>

                  {/* Important Note */}
                  <div className="bg-yellow-50 border-2 border-yellow-300 rounded-xl p-4 mb-6">
                    <p className="text-yellow-800 font-semibold">
                      <strong>N.B:</strong> WHEN SUBMITTING THE REGISTRATION FORM, COME WITH THE CHILD
                    </p>
                  </div>

                  {/* Agreement */}
                  <div className="border-b-2 border-gray-200 pb-6">
                    <label className="flex items-start space-x-3 cursor-pointer">
                      <input
                        type="checkbox"
                        name="agreedToTerms"
                        checked={formData.agreedToTerms}
                        onChange={handleChange}
                        required
                        className="w-5 h-5 mt-1 text-royal-600 focus:ring-royal-500"
                      />
                      <span className="text-gray-700 dark:text-gray-300">
                        I agree to abide by the school's regulation, pay fees promptly and promise to settle all outstanding bills in case child leaves for another school. *
                      </span>
                    </label>
                  </div>

                  {/* Signature and Date */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-gray-700 dark:text-gray-300 font-semibold mb-2">SIGNATURE OF PARENT / GUARDIAN *</label>
                      <input
                        type="text"
                        name="signature"
                        value={formData.signature}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border-2 border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200 rounded-xl focus:border-royal-500 focus:outline-none transition-colors"
                        placeholder="Enter full name"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 dark:text-gray-300 font-semibold mb-2">DATE *</label>
                      <input
                        type="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border-2 border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200 rounded-xl focus:border-royal-500 focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting || !formData.agreedToTerms}
                    className="w-full bg-gradient-to-r from-royal-600 to-royal-700 hover:from-royal-700 hover:to-royal-800 text-white px-6 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Submitting...' : 'Submit Registration Form'}
                  </button>
                </form>
              </div>

              <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-royal-50 p-6 rounded-2xl border-2 border-royal-200">
                  <Phone className="w-8 h-8 text-royal-600 mb-3" />
                  <h4 className="font-bold text-royal-800 mb-2">Call Us</h4>
                  <p className="text-gray-700 dark:text-gray-300">0244588375</p>
                </div>
                <div className="bg-tomato-50 p-6 rounded-2xl border-2 border-tomato-200">
                  <Mail className="w-8 h-8 text-tomato-600 mb-3" />
                  <h4 className="font-bold text-tomato-800 mb-2">Email Us</h4>
                  <p className="text-gray-700 dark:text-gray-300">admissions@fountaingate.edu.gh</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
