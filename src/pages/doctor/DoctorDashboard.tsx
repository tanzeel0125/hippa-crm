import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { doctorTodayAppointments, doctorEarnings } from "@/lib/mockData";
import { Calendar, Video, DollarSign, Users, Clock, ArrowRight, TrendingUp } from "lucide-react";

const DoctorDashboard = () => {
  return (
    <DashboardLayout userType="doctor">
      <div className="space-y-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="font-display text-2xl md:text-3xl font-bold">Good morning, Dr. Chen!</h1>
          <p className="text-muted-foreground">You have {doctorTodayAppointments.filter(a => a.status === 'upcoming').length} appointments today</p>
        </motion.div>

        {/* Stats */}
        <motion.div className="grid grid-cols-2 lg:grid-cols-4 gap-4" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
          {[
            { label: "Today's Sessions", value: doctorTodayAppointments.length, icon: Calendar, color: "text-primary" },
            { label: "This Week", value: `$${doctorEarnings.thisWeek.toLocaleString()}`, icon: DollarSign, color: "text-success" },
            { label: "Total Patients", value: "24", icon: Users, color: "text-secondary" },
            { label: "Avg Rating", value: "4.9", icon: TrendingUp, color: "text-warning" },
          ].map((stat) => (
            <div key={stat.label} className="card-elevated-lg p-5">
              <div className="flex items-center justify-between">
                <stat.icon className={`w-5 h-5 ${stat.color}`} />
              </div>
              <p className="text-2xl font-bold mt-3">{stat.value}</p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Today's Schedule */}
          <motion.div className="lg:col-span-2" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
            <div className="card-elevated-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="font-display text-lg font-semibold">Today's Schedule</h2>
                <Link to="/doctor/schedule" className="text-sm text-primary hover:underline">Manage</Link>
              </div>
              <div className="space-y-3">
                {doctorTodayAppointments.map((apt) => (
                  <div key={apt.id} className={`flex items-center gap-4 p-4 rounded-xl border ${apt.status === 'in-progress' ? 'border-primary bg-primary/5' : 'border-border'}`}>
                    <img src={apt.patientImage} alt={apt.patientName} className="w-12 h-12 rounded-full object-cover" />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <p className="font-medium">{apt.patientName}</p>
                        {apt.status === 'in-progress' && <span className="px-2 py-0.5 bg-primary text-primary-foreground text-xs rounded-full">In Progress</span>}
                        {apt.status === 'completed' && <span className="px-2 py-0.5 bg-muted text-muted-foreground text-xs rounded-full">Completed</span>}
                      </div>
                      <p className="text-sm text-muted-foreground">{apt.time} · {apt.type}</p>
                    </div>
                    {apt.status === 'upcoming' && <Link to={`/doctor/session/${apt.id}`}><Button size="sm"><Video className="w-4 h-4" /> Start</Button></Link>}
                    {apt.status === 'in-progress' && <Link to={`/doctor/session/${apt.id}`}><Button size="sm" variant="hero"><Video className="w-4 h-4" /> Join</Button></Link>}
                    {apt.status === 'completed' && <Link to={`/doctor/notes/${apt.id}`}><Button size="sm" variant="outline">Notes</Button></Link>}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Quick Stats */}
          <motion.div className="space-y-6" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
            <div className="card-elevated-lg p-6">
              <h2 className="font-display text-lg font-semibold mb-4">Earnings</h2>
              <div className="space-y-4">
                <div className="flex justify-between"><span className="text-muted-foreground">This month</span><span className="font-semibold">${doctorEarnings.thisMonth.toLocaleString()}</span></div>
                <div className="flex justify-between"><span className="text-muted-foreground">Pending</span><span className="font-semibold text-warning">${doctorEarnings.pending.toLocaleString()}</span></div>
                <div className="h-px bg-border" />
                <Link to="/doctor/earnings"><Button variant="outline" className="w-full">View Details <ArrowRight className="w-4 h-4" /></Button></Link>
              </div>
            </div>

            <div className="card-elevated-lg p-6">
              <h2 className="font-display text-lg font-semibold mb-4">Quick Actions</h2>
              <div className="space-y-2">
                <Link to="/doctor/schedule"><Button variant="outline" className="w-full justify-start"><Clock className="w-4 h-4" /> Set Availability</Button></Link>
                <Link to="/doctor/patients"><Button variant="outline" className="w-full justify-start"><Users className="w-4 h-4" /> View Patients</Button></Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default DoctorDashboard;
