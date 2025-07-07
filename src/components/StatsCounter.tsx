
import { useEffect, useState } from 'react';

const StatsCounter = () => {
  const [counts, setCounts] = useState({ projects: 0, clients: 0, years: 0, satisfaction: 0 });
  const [isVisible, setIsVisible] = useState(false);

  const finalCounts = {
    projects: 250,
    clients: 150,
    years: 5,
    satisfaction: 98
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('stats-section');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000;
    const steps = 60;
    const stepDuration = duration / steps;

    let step = 0;
    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);

      setCounts({
        projects: Math.floor(finalCounts.projects * easeOutQuart),
        clients: Math.floor(finalCounts.clients * easeOutQuart),
        years: Math.floor(finalCounts.years * easeOutQuart),
        satisfaction: Math.floor(finalCounts.satisfaction * easeOutQuart)
      });

      if (step >= steps) {
        clearInterval(timer);
        setCounts(finalCounts);
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [isVisible]);

  const stats = [
    { label: 'Projects Delivered', value: counts.projects, suffix: '+' },
    { label: 'Happy Clients', value: counts.clients, suffix: '+' },
    { label: 'Years Experience', value: counts.years, suffix: '+' },
    { label: 'Client Satisfaction', value: counts.satisfaction, suffix: '%' }
  ];

  return (
    <div id="stats-section" className="grid grid-cols-2 md:grid-cols-4 gap-8">
      {stats.map((stat, index) => (
        <div 
          key={index}
          className={`text-center transition-all duration-700 delay-${index * 100} ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-2">
            {stat.value}{stat.suffix}
          </div>
          <div className="text-slate-600 font-medium">
            {stat.label}
          </div>
        </div>
      ))}
    </div>
  );
};

export default StatsCounter;
