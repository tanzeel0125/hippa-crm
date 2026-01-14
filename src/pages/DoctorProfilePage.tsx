import { useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import PublicLayout from "@/components/layout/PublicLayout";
import { doctors, timeSlots } from "@/lib/mockData";
import {
  Star,
  ArrowLeft,
  Video,
  Clock,
  Award,
  Languages,
  GraduationCap,
  Shield,
  CheckCircle2,
  CalendarIcon,
} from "lucide-react";
import { format, addDays } from "date-fns";

const DoctorProfilePage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(
    addDays(new Date(), 1)
  );
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  const doctor = doctors.find((d) => d.id === id);

  if (!doctor) {
    return (
      <PublicLayout>
        <div className="container-wide py-20 text-center">
          <p className="text-lg text-muted-foreground mb-4">
            Doctor not found
          </p>
          <Link to="/find-doctor">
            <Button>Back to Search</Button>
          </Link>
        </div>
      </PublicLayout>
    );
  }

  const handleBooking = () => {
    if (selectedDate && selectedTime) {
      navigate(
        `/book/${doctor.id}?date=${format(
          selectedDate,
          "yyyy-MM-dd"
        )}&time=${encodeURIComponent(selectedTime)}`
      );
    }
  };

  return (
    <PublicLayout>
      <div className="bg-muted/30 min-h-screen">
        <div className="container-wide py-8">
          {/* Back Button */}
          <Link
            to="/find-doctor"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to search
          </Link>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6">
              {/* Profile Header */}
              <motion.div
                className="card-elevated-lg p-6 md:p-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
              >
                <div className="flex flex-col md:flex-row gap-6">
                  <img
                    src={doctor.image}
                    alt={doctor.name}
                    className="w-32 h-32 rounded-2xl object-cover mx-auto md:mx-0"
                  />
                  <div className="text-center md:text-left flex-1">
                    <h1 className="font-display text-2xl md:text-3xl font-bold">
                      {doctor.name}
                    </h1>
                    <p className="text-muted-foreground">{doctor.title}</p>
                    <p className="text-primary font-medium mt-1">
                      {doctor.specialty}
                    </p>

                    <div className="flex items-center justify-center md:justify-start gap-4 mt-4">
                      <div className="flex items-center gap-1">
                        <Star className="w-5 h-5 fill-warning text-warning" />
                        <span className="font-semibold">{doctor.rating}</span>
                        <span className="text-muted-foreground">
                          ({doctor.reviewCount} reviews)
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6 pt-6 border-t border-border">
                  <div className="text-center p-3 bg-muted/50 rounded-xl">
                    <Clock className="w-5 h-5 mx-auto text-primary mb-1" />
                    <p className="text-sm font-medium">
                      {doctor.yearsExperience} Years
                    </p>
                    <p className="text-xs text-muted-foreground">Experience</p>
                  </div>
                  <div className="text-center p-3 bg-muted/50 rounded-xl">
                    <Video className="w-5 h-5 mx-auto text-primary mb-1" />
                    <p className="text-sm font-medium">Telehealth</p>
                    <p className="text-xs text-muted-foreground">Available</p>
                  </div>
                  <div className="text-center p-3 bg-muted/50 rounded-xl">
                    <Languages className="w-5 h-5 mx-auto text-primary mb-1" />
                    <p className="text-sm font-medium">
                      {doctor.languages.length} Languages
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {doctor.languages.join(", ")}
                    </p>
                  </div>
                  <div className="text-center p-3 bg-muted/50 rounded-xl">
                    <Award className="w-5 h-5 mx-auto text-primary mb-1" />
                    <p className="text-sm font-medium">Licensed</p>
                    <p className="text-xs text-muted-foreground">Verified</p>
                  </div>
                </div>
              </motion.div>

              {/* About */}
              <motion.div
                className="card-elevated-lg p-6 md:p-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
              >
                <h2 className="font-display text-xl font-semibold mb-4">
                  About
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  {doctor.bio}
                </p>

                <h3 className="font-semibold mt-6 mb-3">Specialties</h3>
                <div className="flex flex-wrap gap-2">
                  {doctor.specialties.map((specialty) => (
                    <span
                      key={specialty}
                      className="px-3 py-1.5 bg-primary/5 text-primary rounded-full text-sm font-medium"
                    >
                      {specialty}
                    </span>
                  ))}
                </div>

                <h3 className="font-semibold mt-6 mb-3">Education</h3>
                <div className="flex items-center gap-3">
                  <GraduationCap className="w-5 h-5 text-muted-foreground" />
                  <span>{doctor.education}</span>
                </div>
              </motion.div>

              {/* Insurance */}
              <motion.div
                className="card-elevated-lg p-6 md:p-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
              >
                <h2 className="font-display text-xl font-semibold mb-4">
                  Insurance Accepted
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {doctor.acceptsInsurance.map((insurance) => (
                    <div
                      key={insurance}
                      className="flex items-center gap-2 text-sm"
                    >
                      <CheckCircle2 className="w-4 h-4 text-success" />
                      {insurance}
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Booking Sidebar */}
            <motion.div
              className="lg:col-span-1"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              <div className="card-elevated-lg p-6 sticky top-24">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <p className="text-2xl font-bold">${doctor.sessionRate}</p>
                    <p className="text-sm text-muted-foreground">per session</p>
                  </div>
                  <div className="flex items-center gap-1 text-success text-sm">
                    <Shield className="w-4 h-4" />
                    Insurance accepted
                  </div>
                </div>

                <div className="mb-4">
                  <h3 className="font-semibold mb-3 flex items-center gap-2">
                    <CalendarIcon className="w-4 h-4" />
                    Select a Date
                  </h3>
                  <Calendar
                    mode="single"
                    selected={selectedDate}
                    onSelect={setSelectedDate}
                    disabled={(date) => date < new Date()}
                    className="rounded-xl border"
                  />
                </div>

                {selectedDate && (
                  <div className="mb-6">
                    <h3 className="font-semibold mb-3">Available Times</h3>
                    <div className="grid grid-cols-2 gap-2">
                      {timeSlots.slice(0, 8).map((time) => (
                        <button
                          key={time}
                          onClick={() => setSelectedTime(time)}
                          className={`p-2.5 text-sm rounded-lg border transition-colors ${
                            selectedTime === time
                              ? "bg-primary text-primary-foreground border-primary"
                              : "border-border hover:border-primary hover:bg-primary/5"
                          }`}
                        >
                          {time}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                <Button
                  variant="hero"
                  size="lg"
                  className="w-full"
                  onClick={handleBooking}
                  disabled={!selectedDate || !selectedTime}
                >
                  Book Appointment
                </Button>

                <p className="text-xs text-muted-foreground text-center mt-4">
                  Free cancellation up to 24 hours before
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </PublicLayout>
  );
};

export default DoctorProfilePage;
