import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { upcomingAppointments, pastAppointments, messages } from "@/lib/mockData";
import { Calendar, Video, ArrowRight, MessageSquare, CreditCard, Plus } from "lucide-react";

const PatientDashboard = () => {
  return (
    <DashboardLayout userType="patient">
      <div className="space-y-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="font-display text-2xl md:text-3xl font-bold">Welcome back, Alex!</h1>
          <p className="text-muted-foreground">Here's what's happening with your care</p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6">
          <motion.div className="lg:col-span-2 space-y-6" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
            {/* Upcoming Appointments */}
            <div className="card-elevated-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="font-display text-lg font-semibold">Upcoming Appointments</h2>
                <Link to="/patient/find-doctor"><Button size="sm"><Plus className="w-4 h-4" /> Book New</Button></Link>
              </div>
              {upcomingAppointments.length > 0 ? (
                <div className="space-y-4">
                  {upcomingAppointments.map((apt) => (
                    <div key={apt.id} className="flex items-center gap-4 p-4 bg-muted/50 rounded-xl">
                      <img src={apt.doctorImage} alt={apt.doctorName} className="w-12 h-12 rounded-full object-cover" />
                      <div className="flex-1 min-w-0">
                        <p className="font-medium">{apt.doctorName}</p>
                        <p className="text-sm text-muted-foreground">{apt.date} at {apt.time}</p>
                      </div>
                      <Link to={`/patient/session/${apt.id}`}><Button size="sm"><Video className="w-4 h-4" /> Join</Button></Link>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8"><p className="text-muted-foreground mb-4">No upcoming appointments</p><Link to="/patient/find-doctor"><Button>Find a Doctor</Button></Link></div>
              )}
            </div>

            {/* Past Visits */}
            <div className="card-elevated-lg p-6">
              <h2 className="font-display text-lg font-semibold mb-4">Recent Visits</h2>
              <div className="space-y-3">
                {pastAppointments.slice(0, 2).map((apt) => (
                  <Link key={apt.id} to={`/patient/visit/${apt.id}`} className="flex items-center gap-4 p-3 rounded-lg hover:bg-muted/50 transition-colors">
                    <img src={apt.doctorImage} alt={apt.doctorName} className="w-10 h-10 rounded-full object-cover" />
                    <div className="flex-1"><p className="text-sm font-medium">{apt.doctorName}</p><p className="text-xs text-muted-foreground">{apt.date}</p></div>
                    <ArrowRight className="w-4 h-4 text-muted-foreground" />
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Sidebar */}
          <motion.div className="space-y-6" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
            {/* Messages */}
            <div className="card-elevated-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="font-display text-lg font-semibold">Messages</h2>
                <Link to="/patient/messages" className="text-sm text-primary hover:underline">View all</Link>
              </div>
              <div className="space-y-3">
                {messages.slice(0, 2).map((msg) => (
                  <div key={msg.id} className={`p-3 rounded-lg ${msg.read ? "bg-muted/30" : "bg-primary/5 border border-primary/20"}`}>
                    <p className="text-sm font-medium">{msg.from}</p>
                    <p className="text-xs text-muted-foreground truncate">{msg.preview}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="card-elevated-lg p-6">
              <h2 className="font-display text-lg font-semibold mb-4">Quick Actions</h2>
              <div className="space-y-2">
                <Link to="/patient/find-doctor"><Button variant="outline" className="w-full justify-start"><Calendar className="w-4 h-4" /> Book Appointment</Button></Link>
                <Link to="/patient/messages"><Button variant="outline" className="w-full justify-start"><MessageSquare className="w-4 h-4" /> Send Message</Button></Link>
                <Link to="/patient/billing"><Button variant="outline" className="w-full justify-start"><CreditCard className="w-4 h-4" /> View Billing</Button></Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default PatientDashboard;
