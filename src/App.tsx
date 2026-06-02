import { useState, useCallback } from 'react';
import { Heart, Sparkles, BookOpen, ChevronDown, Menu, X, ArrowRight, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const globalStyles = `
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body { background-color: #FDFBF7; color: #4A4443; font-family: system-ui, -apple-system, sans-serif; overflow-x: hidden; }
  html { scroll-behavior: smooth; }
  
  .desktop-nav { display: flex; align-items: center; gap: 32px; }
  .mobile-btn { display: none; background: none; border: none; cursor: pointer; color: #7A7270; }
  .mobile-menu { display: none; }
  
  .hero-title { font-size: clamp(40px, 6vw, 72px); }
  .grid-authors { display: grid; grid-template-columns: 1fr 1fr; gap: 40px; }
  
  @media (max-width: 768px) {
    .desktop-nav { display: none !important; }
    .mobile-btn { display: flex !important; }
    .mobile-menu { display: flex; flex-direction: column; background: #fff; border-bottom: 1px solid rgba(168,208,179,0.3); padding: 16px 24px; gap: 16px; }
    .grid-authors { grid-template-columns: 1fr; }
    .cta-buttons { flex-direction: column; width: 100%; }
  }

  .nav-link { color: #7A7270; text-decoration: none; font-size: 16px; transition: color 0.3s; }
  .nav-link:hover { color: #A8D0B3; }
  
  .btn-primary {
    background: linear-gradient(to right, #A8D0B3, #8CBF98);
    color: white;
    padding: 12px 28px;
    border-radius: 999px;
    border: none;
    font-size: 16px;
    cursor: pointer;
    box-shadow: 0 4px 14px 0 rgba(168,208,179,0.4);
    transition: transform 0.2s;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
  }
  .btn-primary:hover { transform: translateY(-2px); }
`;

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeModule, setActiveModule] = useState<number | null>(null);
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

  const modules = [
    { id: 1, title: "Модуль 1: Искусство слышать", description: "Учимся активному слушанию. Как понимать не только слова, но и эмоции партнера без осуждения и критики." },
    { id: 2, title: "Модуль 2: Кризисы как точки роста", description: "Разбор типичных семейных конфликтов. Взгляд психолога (Александра) и взгляд практика (Андрей, отец 3-х детей)." },
    { id: 3, title: "Модуль 3: Возвращение близости", description: "Практики восстановления эмоциональной и физической связи после долгих лет брака или рождения детей." },
    { id: 4, title: "Модуль 4: Баланс 'Я' и 'МЫ'", description: "Как сохранять личные границы и интересы, оставаясь при этом крепкой и любящей командой." }
  ];

  const testimonials = [
    { names: "Анна и Михаил, 7 лет в браке", text: "Курс стал для нас спасательным кругом. Мы почти не разговаривали последние полгода. Андрей и Александра помогли нам вспомнить, почему мы вообще выбрали друг друга.", rating: 5 },
    { names: "Елена, мама двоих детей", text: "Модуль про возвращение близости открыл мне глаза. Оказывается, можно не требовать внимания через ссоры, а просто уметь правильно просить.", rating: 5 }
  ];

  const nextTestimonial = useCallback(() => {
    setCurrentTestimonialIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  }, [testimonials.length]);

  const prevTestimonial = useCallback(() => {
    setCurrentTestimonialIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  }, [testimonials.length]);

  return (
    <div style={{ position: 'relative', minHeight: '100vh' }}>
      <style>{globalStyles}</style>

      {/* Шапка сайта */}
      <nav style={{ position: 'sticky', top: 0, zIndex: 50, background: 'rgba(253, 251, 247, 0.9)', backdropFilter: 'blur(12px)', borderBottom: '1px solid rgba(194, 229, 211, 0.3)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px', height: '80px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Heart color="#A8D0B3" fill="#A8D0B3" />
            <span style={{ fontFamily: 'Georgia, serif', fontSize: '24px', fontWeight: 600 }}>Гармония</span>
          </div>
          
          <div className="desktop-nav">
            <a href="#about" className="nav-link">О курсе</a>
            <a href="#authors" className="nav-link">Ведущие</a>
            <a href="#program" className="nav-link">Программа</a>
            <button className="btn-primary">Записаться</button>
          </div>

          <button className="mobile-btn" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Выпадающее мобильное меню */}
        {isMenuOpen && (
          <div className="mobile-menu">
            <a href="#about" className="nav-link" onClick={() => setIsMenuOpen(false)}>О курсе</a>
            <a href="#authors" className="nav-link" onClick={() => setIsMenuOpen(false)}>Ведущие</a>
            <a href="#program" className="nav-link" onClick={() => setIsMenuOpen(false)}>Программа</a>
            <button className="btn-primary" style={{ width: '100%' }}>Записаться</button>
          </div>
        )}
      </nav>

      {/* Главный экран */}
      <div id="about" style={{ position: 'relative', width: '100%', minHeight: '90vh', display: 'flex', alignItems: 'center', justifyContent: 'center', paddingTop: '40px', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, zIndex: -2, backgroundImage: 'url("https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&w=1920&q=80")', backgroundPosition: 'center', backgroundSize: 'cover', backgroundAttachment: 'fixed' }}></div>
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(253, 251, 247, 0.85), rgba(253, 251, 247, 1))', zIndex: -1 }}></div>

        <section style={{ position: 'relative', zIndex: 10, padding: '0 24px', maxWidth: '1200px', margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '8px 16px', borderRadius: '999px', background: 'rgba(255,255,255,0.7)', border: '1px solid rgba(255,255,255,0.8)', marginBottom: '32px', fontSize: '14px', color: '#7A7270' }}>
            <Sparkles size={16} color="#A8D0B3" />
            <span>Новый поток стартует 15 октября</span>
          </div>
          <h1 className="hero-title" style={{ fontFamily: 'Georgia, serif', fontWeight: 500, lineHeight: 1.1, marginBottom: '24px', maxWidth: '800px' }}>
            Создайте отношения,<br />в которых <span style={{ color: '#8CBF98', fontStyle: 'italic' }}>тепло и безопасно</span>
          </h1>
          <p style={{ fontSize: '18px', color: '#4A4443', marginBottom: '40px', maxWidth: '600px', lineHeight: 1.6, background: 'rgba(255,255,255,0.4)', padding: '16px', borderRadius: '16px' }}>
            Авторский курс от дипломированного психолога и многодетного отца. 
            Практические инструменты, чтобы вернуть близость, научиться слышать друг друга и пройти через любые кризисы вместе.
          </p>
          <div className="cta-buttons" style={{ display: 'flex', gap: '16px', justifyContent: 'center' }}>
            <button className="btn-primary" style={{ padding: '16px 32px', fontSize: '18px' }}>
              Начать трансформацию <ArrowRight size={20} />
            </button>
            <button style={{ background: 'rgba(255,255,255,0.8)', border: '1px solid rgba(168,208,179,0.4)', color: '#4A4443', padding: '16px 32px', borderRadius: '999px', fontSize: '18px', cursor: 'pointer' }}>
              Узнать подробнее
            </button>
          </div>
        </section>
      </div>

      {/* Ведущие */}
      <section id="authors" style={{ padding: '80px 24px', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <h2 style={{ fontFamily: 'Georgia, serif', fontSize: '36px', marginBottom: '16px' }}>Кто будет бережно вести вас</h2>
          <div style={{ width: '96px', height: '4px', background: 'linear-gradient(to right, transparent, #A8D0B3, transparent)', margin: '0 auto' }}></div>
        </div>

        <div className="grid-authors">
          <div style={{ background: 'rgba(255,255,255,0.6)', border: '1px solid rgba(255,255,255,0.8)', borderRadius: '24px', padding: '40px', boxShadow: '0 4px 30px rgba(0,0,0,0.03)' }}>
            <div style={{ width: '120px', height: '120px', background: '#E1ECC8', borderRadius: '50%', marginBottom: '24px', border: '4px solid white', overflow: 'hidden', margin: '0 auto' }}>
              <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80" alt="Александра" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <h3 style={{ fontFamily: 'Georgia, serif', fontSize: '28px', marginBottom: '8px', textAlign: 'center' }}>Александра</h3>
            <p style={{ color: '#8CBF98', fontWeight: 500, marginBottom: '16px', textAlign: 'center' }}>Клинический психолог, семейный терапевт</p>
            <p style={{ color: '#7A7270', lineHeight: 1.6, textAlign: 'center' }}>«Моя задача — дать вам безопасное пространство и научно обоснованные инструменты. Мы разберем глубинные причины недопониманий.»</p>
          </div>

          <div style={{ background: 'rgba(255,255,255,0.6)', border: '1px solid rgba(255,255,255,0.8)', borderRadius: '24px', padding: '40px', boxShadow: '0 4px 30px rgba(0,0,0,0.03)' }}>
            <div style={{ width: '120px', height: '120px', background: '#C2E5D3', borderRadius: '50%', marginBottom: '24px', border: '4px solid white', overflow: 'hidden', margin: '0 auto' }}>
               <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&q=80" alt="Андрей" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <h3 style={{ fontFamily: 'Georgia, serif', fontSize: '28px', marginBottom: '8px', textAlign: 'center' }}>Андрей</h3>
            <p style={{ color: '#7ab087', fontWeight: 500, marginBottom: '16px', textAlign: 'center' }}>Отец троих детей, коуч по отношениям</p>
            <p style={{ color: '#7A7270', lineHeight: 1.6, textAlign: 'center' }}>«Теория мертва без практики. Я поделюсь реальным мужским взглядом на то, как сохранить любовь в бытовой рутине.»</p>
          </div>
        </div>
      </section>

      {/* Программа курса */}
      <section id="program" style={{ padding: '80px 24px', maxWidth: '800px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <BookOpen size={40} color="#A8D0B3" style={{ margin: '0 auto 16px auto' }} />
          <h2 style={{ fontFamily: 'Georgia, serif', fontSize: '36px', marginBottom: '16px' }}>Путь к близости</h2>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {modules.map((mod) => (
            <div key={mod.id} style={{ background: 'rgba(255,255,255,0.7)', border: activeModule === mod.id ? '1px solid #A8D0B3' : '1px solid rgba(255,255,255,0.8)', borderRadius: '16px', overflow: 'hidden', transition: 'all 0.3s' }}>
              <button 
                onClick={() => setActiveModule(activeModule === mod.id ? null : mod.id)}
                style={{ width: '100%', textAlign: 'left', padding: '24px', background: 'none', border: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer' }}
              >
                <span style={{ fontFamily: 'Georgia, serif', fontSize: '20px', color: '#4A4443' }}>{mod.title}</span>
                <ChevronDown style={{ color: '#A8D0B3', transform: activeModule === mod.id ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s' }} />
              </button>
              {activeModule === mod.id && (
                <div style={{ padding: '0 24px 24px 24px' }}>
                  <p style={{ color: '#7A7270', lineHeight: 1.6, borderTop: '1px solid rgba(168,208,179,0.2)', paddingTop: '16px' }}>{mod.description}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Отзывы */}
      <section style={{ padding: '80px 24px', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <h2 style={{ fontFamily: 'Georgia, serif', fontSize: '36px', marginBottom: '16px' }}>Истории наших пар</h2>
        </div>
        <div style={{ maxWidth: '800px', margin: '0 auto', position: 'relative', background: 'rgba(255,255,255,0.8)', padding: '48px', borderRadius: '32px', boxShadow: '0 8px 30px rgba(0,0,0,0.04)', border: '1px solid rgba(255,255,255,0.8)', textAlign: 'center' }}>
          <Quote style={{ position: 'absolute', top: '24px', left: '24px', color: '#A8D0B3', opacity: 0.2 }} size={60} />
          <div style={{ display: 'flex', justifyContent: 'center', gap: '4px', marginBottom: '24px' }}>
            {[...Array(testimonials[currentTestimonialIndex].rating)].map((_, i) => (
              <Heart key={i} size={20} fill="#A8D0B3" color="#A8D0B3" />
            ))}
          </div>
          <p style={{ fontFamily: 'Georgia, serif', fontSize: '24px', fontStyle: 'italic', marginBottom: '32px', lineHeight: 1.5 }}>
            "{testimonials[currentTestimonialIndex].text}"
          </p>
          <p style={{ color: '#7ab087', fontWeight: 500, fontSize: '18px' }}>
            {testimonials[currentTestimonialIndex].names}
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', marginTop: '32px' }}>
            <button onClick={prevTestimonial} style={{ padding: '12px', borderRadius: '50%', background: '#fff', border: '1px solid rgba(168,208,179,0.3)', cursor: 'pointer', color: '#7A7270' }}><ChevronLeft /></button>
            <button onClick={nextTestimonial} style={{ padding: '12px', borderRadius: '50%', background: '#fff', border: '1px solid rgba(168,208,179,0.3)', cursor: 'pointer', color: '#7A7270' }}><ChevronRight /></button>
          </div>
        </div>
      </section>

      {/* Финальный блок (Call to Action) */}
      <section style={{ padding: '80px 24px' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', background: 'linear-gradient(135deg, rgba(225,236,200,0.7), rgba(194,229,211,0.6), rgba(168,208,179,0.5))', borderRadius: '32px', padding: '64px 40px', textAlign: 'center', boxShadow: '0 20px 40px rgba(168,208,179,0.1)', border: '1px solid rgba(255,255,255,0.8)' }}>
          <h2 style={{ fontFamily: 'Georgia, serif', fontSize: '40px', marginBottom: '24px', color: '#4A4443' }}>
            Сделайте шаг навстречу друг другу
          </h2>
          <p style={{ fontSize: '18px', color: '#4A4443', marginBottom: '40px', maxWidth: '600px', margin: '0 auto 40px auto', lineHeight: 1.6 }}>
            Отношения — это танец двух людей. Мы поможем вам вспомнить движения и наслаждаться процессом вместе. Количество мест в группе ограничено.
          </p>
          <button style={{ background: '#4A4443', color: '#fff', border: 'none', padding: '16px 40px', borderRadius: '999px', fontSize: '18px', cursor: 'pointer', boxShadow: '0 8px 20px rgba(74, 68, 67, 0.3)', transition: 'transform 0.2s' }}>
            Занять место на курсе
          </button>
        </div>
      </section>

      {/* Подвал (Footer) */}
      <footer style={{ background: 'rgba(253, 251, 247, 0.9)', borderTop: '1px solid rgba(194, 229, 211, 0.5)', padding: '48px 24px', marginTop: '20px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '24px', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Heart color="#A8D0B3" fill="#A8D0B3" />
            <span style={{ fontFamily: 'Georgia, serif', fontSize: '20px', fontWeight: 600 }}>Гармония.</span>
          </div>
          <div style={{ display: 'flex', gap: '24px', color: '#7A7270', flexWrap: 'wrap', justifyContent: 'center' }}>
            <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Оферта</a>
            <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Политика конфиденциальности</a>
            <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Контакты</a>
          </div>
          <p style={{ color: '#7A7270', fontSize: '14px' }}>
            © {new Date().getFullYear()} Курс «Гармония». Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;
