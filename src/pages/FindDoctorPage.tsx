import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import PublicLayout from "@/components/layout/PublicLayout";
import { doctors, specialties, insuranceProviders } from "@/lib/mockData";
import { Search, Star, Filter, MapPin, Video, Calendar } from "lucide-react";

const FindDoctorPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSpecialty, setSelectedSpecialty] = useState<string>("all");
  const [selectedInsurance, setSelectedInsurance] = useState<string>("all");

  const filteredDoctors = doctors.filter((doctor) => {
    const matchesSearch =
      doctor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doctor.specialty.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doctor.specialties.some((s) =>
        s.toLowerCase().includes(searchQuery.toLowerCase())
      );

    const matchesSpecialty =
      selectedSpecialty === "all" ||
      doctor.specialties.includes(selectedSpecialty);

    const matchesInsurance =
      selectedInsurance === "all" ||
      doctor.acceptsInsurance.includes(selectedInsurance);

    return matchesSearch && matchesSpecialty && matchesInsurance;
  });

  return (
    <PublicLayout>
      {/* Header */}
      <section className="bg-gradient-to-b from-background to-muted/30 py-12 md:py-16">
        <div className="container-wide">
          <motion.div
            className="text-center mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Find Your Provider
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Browse our network of licensed therapists and psychiatrists
            </p>
          </motion.div>

          {/* Search & Filters */}
          <motion.div
            className="card-elevated-lg p-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="grid md:grid-cols-4 gap-4">
              <div className="md:col-span-2 relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  placeholder="Search by name or specialty..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 h-12"
                />
              </div>

              <Select
                value={selectedSpecialty}
                onValueChange={setSelectedSpecialty}
              >
                <SelectTrigger className="h-12">
                  <SelectValue placeholder="Specialty" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Specialties</SelectItem>
                  {specialties.map((specialty) => (
                    <SelectItem key={specialty} value={specialty}>
                      {specialty}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select
                value={selectedInsurance}
                onValueChange={setSelectedInsurance}
              >
                <SelectTrigger className="h-12">
                  <SelectValue placeholder="Insurance" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Insurance</SelectItem>
                  {insuranceProviders.map((insurance) => (
                    <SelectItem key={insurance} value={insurance}>
                      {insurance}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Results */}
      <section className="py-12">
        <div className="container-wide">
          <div className="flex items-center justify-between mb-6">
            <p className="text-muted-foreground">
              <span className="font-semibold text-foreground">
                {filteredDoctors.length}
              </span>{" "}
              providers found
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            {filteredDoctors.map((doctor, index) => (
              <motion.div
                key={doctor.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <Link to={`/doctor/${doctor.id}`}>
                  <div className="card-elevated-lg p-6 hover:shadow-lg transition-all group h-full">
                    <div className="flex gap-4">
                      <img
                        src={doctor.image}
                        alt={doctor.name}
                        className="w-20 h-20 md:w-24 md:h-24 rounded-xl object-cover flex-shrink-0"
                      />
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-2">
                          <div>
                            <h3 className="font-display text-lg md:text-xl font-semibold group-hover:text-primary transition-colors">
                              {doctor.name}
                            </h3>
                            <p className="text-sm text-muted-foreground">
                              {doctor.title}
                            </p>
                          </div>
                          <div className="flex items-center gap-1 bg-muted px-2 py-1 rounded-lg">
                            <Star className="w-4 h-4 fill-warning text-warning" />
                            <span className="text-sm font-medium">
                              {doctor.rating}
                            </span>
                          </div>
                        </div>

                        <p className="text-sm text-muted-foreground mt-2 line-clamp-2">
                          {doctor.bio}
                        </p>
                      </div>
                    </div>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {doctor.specialties.slice(0, 4).map((specialty) => (
                        <span
                          key={specialty}
                          className="px-2.5 py-1 bg-primary/5 text-primary rounded-full text-xs font-medium"
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>

                    <div className="mt-4 pt-4 border-t border-border grid grid-cols-3 gap-4">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Video className="w-4 h-4" />
                        <span>Telehealth</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="w-4 h-4" />
                        <span>{doctor.yearsExperience} yrs exp</span>
                      </div>
                      <div className="text-right">
                        <span className="text-sm font-semibold text-foreground">
                          ${doctor.sessionRate}
                        </span>
                        <span className="text-xs text-muted-foreground">
                          /session
                        </span>
                      </div>
                    </div>

                    <div className="mt-4 flex items-center justify-between">
                      <div>
                        <p className="text-xs text-muted-foreground">
                          Next available
                        </p>
                        <p className="text-sm font-medium text-success">
                          {doctor.nextAvailable}
                        </p>
                      </div>
                      <Button>Book Appointment</Button>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {filteredDoctors.length === 0 && (
            <div className="text-center py-20">
              <p className="text-lg text-muted-foreground mb-4">
                No providers found matching your criteria
              </p>
              <Button
                variant="outline"
                onClick={() => {
                  setSearchQuery("");
                  setSelectedSpecialty("all");
                  setSelectedInsurance("all");
                }}
              >
                Clear filters
              </Button>
            </div>
          )}
        </div>
      </section>
    </PublicLayout>
  );
};

export default FindDoctorPage;
