import React, { useState, useEffect, useCallback } from 'react';
import {
  Heart,
  Sparkles,
  BookOpen,
  ChevronDown,
  Menu,
  X,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Quote,
} from 'lucide-react';

const globalStyles = `
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body { background-color: #FDFBF7; color: #4A4443; font-family: system-ui, -apple-system, sans-serif; overflow-x: hidden; }
  .nav-link { color: #7A7270; text-decoration: none; font-size: 16px; transition: color 0.3s; }
  .nav-link:hover { color: #A8D0B3; }
  .btn-primary { background: linear-gradient(90deg, #A8D0B3, #8CBF98); color: white; border: none; padding: 12px 28px; border-radius: 999px; cursor: pointer; font-size: 16px; font-weight: 500; transition: all 0.3s; box-shadow: 0 4px 14px rgba(168,208,179,0.4); display: inline-flex; align-items: center; gap: 8px; }
  .btn-primary:hover { transform: translateY(-2px); box-shadow: 0 6px 20px rgba(168,208,179,0.6); }
  .btn-secondary { background: rgba(255,255,255,0.8); color: #4A4443; border: 1px solid rgba(168,208,179,0.4); padding: 12px 28px; border-radius: 999px; cursor: pointer; font-size: 16px; transition: all 0.3s; backdrop-filter: blur(4px); }
  .btn-secondary:hover { background: #fff; border-color: #A8D0B3; }
  .section-title { font-family: Georgia, serif; font-size: 36px; text-align: center; margin-bottom: 48px; color: #4A4443; }
  
  /* Адаптивность */
  .desktop-only { display: flex; }
  .mobile-only { display: none; }
  .hero-title { font-size: 64px; }
  .grid-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 40px; }
  
  @media (max-width: 768px) {
    .desktop-only { display: none !important; }
    .mobile-only { display: block !important; }
    .hero-title { font-size: 40px; }
    .grid-2 { grid-template-columns: 1fr; gap: 24px; }
    .cta-box { padding: 40px 20px !important; }
  }
`;

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeModule, setActiveModule] = useState<number | null>(null);
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

  const modules = [
    {
      id: 1,
      title: 'Модуль 1: Искусство слышать',
      description:
        'Учимся активному слушанию. Как понимать не только слова, но и эмоции партнера без осуждения и критики.',
    },
    {
      id: 2,
      title: 'Модуль 2: Кризисы как точки роста',
      description:
        'Разбор типичных семейных конфликтов. Взгляд психолога (Александра) и взгляд практика (Андрей, отец 3-х детей).',
    },
    {
      id: 3,
      title: 'Модуль 3: Возвращение близости',
      description:
        'Практики восстановления эмоциональной и физической связи после долгих лет брака или рождения детей.',
    },
    {
      id: 4,
      title: "Модуль 4: Баланс 'Я' и 'МЫ'",
      description:
        'Как сохранять личные границы и интересы, оставаясь при этом крепкой и любящей командой.',
    },
  ];

  const testimonials = [
    {
      names: 'Анна и Михаил, 7 лет в браке',
      text: 'Курс стал для нас спасательным кругом. Мы почти не разговаривали последние полгода. Андрей и Александра помогли нам вспомнить, почему мы вообще выбрали друг друга.',
      rating: 5,
    },
    {
      names: 'Елена, мама двоих детей',
      text: 'Модуль про возвращение близости открыл мне глаза. Оказывается, можно не требовать внимания через ссоры, а просто уметь правильно просить. Мы снова ходим на свидания!',
      rating: 5,
    },
  ];

  const nextTestimonial = useCallback(() => {
    setCurrentTestimonialIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  }, [testimonials.length]);

  const prevTestimonial = useCallback(() => {
    setCurrentTestimonialIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  }, [testimonials.length]);

  return (
    <div>
      <style>{globalStyles}</style>

      <nav
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 50,
          background: 'rgba(253, 251, 247, 0.85)',
          backdropFilter: 'blur(12px)',
          borderBottom: '1px solid rgba(194, 229, 211, 0.3)',
        }}
      >
        <div
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '0 24px',
            height: '80px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Heart color="#A8D0B3" fill="#A8D0B3" />
            <span
              style={{
                fontSize: '24px',
                fontWeight: 600,
                fontFamily: 'Georgia, serif',
              }}
            >
              Гармония
            </span>
          </div>

          {/* Десктопное меню */}
          <div
            className="desktop-only"
            style={{ alignItems: 'center', gap: '32px' }}
          >
            <a href="#about" className="nav-link">
              О курсе
            </a>
            <a href="#authors" className="nav-link">
              Ведущие
            </a>
            <a href="#program" className="nav-link">
              Программа
            </a>
            <button className="btn-primary">Записаться</button>
          </div>

          {/* Мобильная кнопка меню */}
          <button
            className="mobile-only"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              color: '#7A7270',
            }}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Мобильное выпадающее меню */}
        {isMenuOpen && (
          <div
            className="mobile-only"
            style={{
              background: '#fff',
              borderBottom: '1px solid #C2E5D3',
              padding: '16px 24px',
              display: 'flex',
              flexDirection: 'column',
              gap: '16px',
            }}
          >
            <a
              href="#about"
              className="nav-link"
              onClick={() => setIsMenuOpen(false)}
            >
              О курсе
            </a>
            <a
              href="#authors"
              className="nav-link"
              onClick={() => setIsMenuOpen(false)}
            >
              Ведущие
            </a>
            <a
              href="#program"
              className="nav-link"
              onClick={() => setIsMenuOpen(false)}
            >
              Программа
            </a>
            <button
              className="btn-primary"
              style={{ width: '100%', justifyContent: 'center' }}
            >
              Записаться
            </button>
          </div>
        )}
      </nav>

      <section
        style={{
          position: 'relative',
          width: '100%',
          minHeight: '90vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '80px 20px',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            zIndex: 0,
            backgroundImage:
              'url("https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&w=1920&q=80")',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundAttachment: 'fixed',
            opacity: 0.3,
          }}
        ></div>
        <div
          style={{
            position: 'relative',
            zIndex: 10,
            textAlign: 'center',
            maxWidth: '800px',
          }}
        >
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '8px 16px',
              borderRadius: '999px',
              background: 'rgba(255,255,255,0.7)',
              border: '1px solid #fff',
              marginBottom: '32px',
              fontSize: '14px',
              color: '#7A7270',
            }}
          >
            <Sparkles size={16} color="#A8D0B3" />
            <span>Новый поток стартует 15 октября</span>
          </div>
          <h1
            className="hero-title"
            style={{
              fontFamily: 'Georgia, serif',
              marginBottom: '24px',
              lineHeight: 1.1,
              color: '#4A4443',
            }}
          >
            Создайте отношения,
            <br />в которых{' '}
            <span style={{ color: '#8CBF98', fontStyle: 'italic' }}>
              тепло и безопасно
            </span>
          </h1>
          <p
            style={{
              fontSize: '20px',
              color: '#7A7270',
              marginBottom: '40px',
              lineHeight: 1.6,
              padding: '16px',
              background: 'rgba(255,255,255,0.4)',
              borderRadius: '16px',
            }}
          >
            Авторский курс от дипломированного психолога и многодетного отца.
            Практические инструменты, чтобы вернуть близость и научиться слышать
            друг друга.
          </p>
          <div
            style={{
              display: 'flex',
              gap: '16px',
              justifyContent: 'center',
              flexWrap: 'wrap',
            }}
          >
            <button className="btn-primary">
              Начать трансформацию <ArrowRight size={20} />
            </button>
            <button className="btn-secondary">Узнать подробнее</button>
          </div>
        </div>
      </section>

      <section
        id="authors"
        style={{ padding: '100px 24px', maxWidth: '1000px', margin: '0 auto' }}
      >
        <h2 className="section-title">Ведущие курса</h2>
        <div className="grid-2">
          {/* Александра */}
          <div
            style={{
              background: 'rgba(255,255,255,0.6)',
              padding: '40px',
              borderRadius: '32px',
              border: '1px solid rgba(255,255,255,0.8)',
              boxShadow: '0 8px 30px rgba(0,0,0,0.03)',
            }}
          >
            <div
              style={{
                width: '120px',
                height: '120px',
                background: '#E1ECC8',
                borderRadius: '50%',
                marginBottom: '24px',
                overflow: 'hidden',
                border: '4px solid white',
                margin: '0 auto',
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80"
                alt="Александра"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
            <h3
              style={{
                fontSize: '28px',
                fontFamily: 'Georgia, serif',
                marginBottom: '8px',
                textAlign: 'center',
              }}
            >
              Александра
            </h3>
            <p
              style={{
                color: '#8CBF98',
                fontWeight: 500,
                marginBottom: '16px',
                textAlign: 'center',
              }}
            >
              Психолог, семейный терапевт
            </p>
            <p
              style={{ color: '#7A7270', lineHeight: 1.6, textAlign: 'center' }}
            >
              «Моя задача — дать вам безопасное пространство и научно
              обоснованные инструменты. Мы разберем глубинные причины
              недопониманий.»
            </p>
          </div>

          {/* Андрей */}
          <div
            style={{
              background: 'rgba(255,255,255,0.6)',
              padding: '40px',
              borderRadius: '32px',
              border: '1px solid rgba(255,255,255,0.8)',
              boxShadow: '0 8px 30px rgba(0,0,0,0.03)',
            }}
          >
            <div
              style={{
                width: '120px',
                height: '120px',
                background: '#C2E5D3',
                borderRadius: '50%',
                marginBottom: '24px',
                overflow: 'hidden',
                border: '4px solid white',
                margin: '0 auto',
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&q=80"
                alt="Андрей"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
            <h3
              style={{
                fontSize: '28px',
                fontFamily: 'Georgia, serif',
                marginBottom: '8px',
                textAlign: 'center',
              }}
            >
              Андрей
            </h3>
            <p
              style={{
                color: '#7ab087',
                fontWeight: 500,
                marginBottom: '16px',
                textAlign: 'center',
              }}
            >
              Отец троих детей, практик
            </p>
            <p
              style={{ color: '#7A7270', lineHeight: 1.6, textAlign: 'center' }}
            >
              «Теория мертва без практики. Я поделюсь реальным мужским взглядом
              на то, как сохранить любовь в бытовой рутине.»
            </p>
          </div>
        </div>
      </section>

      <section
        id="program"
        style={{ padding: '80px 24px', maxWidth: '800px', margin: '0 auto' }}
      >
        <BookOpen
          size={40}
          color="#A8D0B3"
          style={{ margin: '0 auto 16px auto', display: 'block' }}
        />
        <h2 className="section-title">Программа курса</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {modules.map((mod) => (
            <div
              key={mod.id}
              style={{
                background: '#fff',
                borderRadius: '16px',
                border:
                  activeModule === mod.id
                    ? '1px solid #A8D0B3'
                    : '1px solid rgba(168,208,179,0.3)',
                overflow: 'hidden',
                transition: 'all 0.3s',
                boxShadow:
                  activeModule === mod.id
                    ? '0 4px 20px rgba(168,208,179,0.1)'
                    : 'none',
              }}
            >
              <button
                onClick={() =>
                  setActiveModule(activeModule === mod.id ? null : mod.id)
                }
                style={{
                  width: '100%',
                  padding: '24px',
                  textAlign: 'left',
                  background: 'transparent',
                  border: 'none',
                  cursor: 'pointer',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <span
                  style={{
                    fontSize: '20px',
                    fontFamily: 'Georgia, serif',
                    color: '#4A4443',
                  }}
                >
                  {mod.title}
                </span>
                <ChevronDown
                  style={{
                    transform:
                      activeModule === mod.id
                        ? 'rotate(180deg)'
                        : 'rotate(0deg)',
                    transition: 'transform 0.3s',
                    color: '#A8D0B3',
                  }}
                />
              </button>
              {activeModule === mod.id && (
                <div
                  style={{
                    padding: '0 24px 24px 24px',
                    color: '#7A7270',
                    lineHeight: 1.6,
                    borderTop: '1px solid rgba(168,208,179,0.1)',
                    paddingTop: '16px',
                  }}
                >
                  {mod.description}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      <section
        style={{ padding: '80px 24px', maxWidth: '900px', margin: '0 auto' }}
      >
        <h2 className="section-title">Истории наших пар</h2>
        <div
          style={{
            background: 'rgba(255,255,255,0.8)',
            padding: '48px',
            borderRadius: '32px',
            boxShadow: '0 8px 40px rgba(0,0,0,0.04)',
            position: 'relative',
            textAlign: 'center',
            border: '1px solid rgba(255,255,255,0.8)',
          }}
        >
          <Quote
            style={{
              position: 'absolute',
              top: '24px',
              left: '24px',
              opacity: 0.1,
              color: '#A8D0B3',
            }}
            size={80}
          />
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '4px',
              marginBottom: '24px',
            }}
          >
            {[...Array(5)].map((_, i) => (
              <Heart key={i} size={20} fill="#A8D0B3" color="#A8D0B3" />
            ))}
          </div>
          <p
            style={{
              fontSize: '24px',
              fontStyle: 'italic',
              marginBottom: '24px',
              lineHeight: 1.5,
              position: 'relative',
              zIndex: 2,
            }}
          >
            "{testimonials[currentTestimonialIndex].text}"
          </p>
          <p style={{ fontWeight: 'bold', color: '#8CBF98', fontSize: '18px' }}>
            {testimonials[currentTestimonialIndex].names}
          </p>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '16px',
              marginTop: '32px',
            }}
          >
            <button
              onClick={prevTestimonial}
              style={{
                padding: '12px',
                borderRadius: '50%',
                border: '1px solid #C2E5D3',
                background: '#fff',
                cursor: 'pointer',
                color: '#7A7270',
              }}
            >
              <ChevronLeft />
            </button>
            <button
              onClick={nextTestimonial}
              style={{
                padding: '12px',
                borderRadius: '50%',
                border: '1px solid #C2E5D3',
                background: '#fff',
                cursor: 'pointer',
                color: '#7A7270',
              }}
            >
              <ChevronRight />
            </button>
          </div>
        </div>
      </section>

      <section style={{ padding: '80px 24px' }}>
        <div
          className="cta-box"
          style={{
            maxWidth: '1000px',
            margin: '0 auto',
            background:
              'linear-gradient(135deg, #E1ECC8 0%, #C2E5D3 50%, #A8D0B3 100%)',
            borderRadius: '32px',
            padding: '80px 40px',
            textAlign: 'center',
            boxShadow: '0 20px 40px rgba(168,208,179,0.2)',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <h2
            style={{
              fontFamily: 'Georgia, serif',
              fontSize: '40px',
              color: '#4A4443',
              marginBottom: '24px',
              position: 'relative',
              zIndex: 2,
            }}
          >
            Сделайте шаг навстречу друг другу
          </h2>
          <p
            style={{
              fontSize: '18px',
              color: '#4A4443',
              marginBottom: '40px',
              maxWidth: '600px',
              margin: '0 auto 40px auto',
              lineHeight: 1.6,
              position: 'relative',
              zIndex: 2,
            }}
          >
            Отношения — это танец двух людей. Мы поможем вам вспомнить движения
            и наслаждаться процессом вместе. Количество мест в группе
            ограничено.
          </p>
          <button
            style={{
              background: '#4A4443',
              color: '#fff',
              border: 'none',
              padding: '16px 40px',
              borderRadius: '999px',
              fontSize: '18px',
              cursor: 'pointer',
              position: 'relative',
              zIndex: 2,
              boxShadow: '0 8px 20px rgba(74, 68, 67, 0.3)',
            }}
          >
            Занять место на курсе
          </button>
        </div>
      </section>

      <footer
        style={{
          background: 'rgba(253, 251, 247, 0.9)',
          padding: '40px 24px',
          borderTop: '1px solid rgba(194, 229, 211, 0.5)',
          marginTop: '40px',
        }}
      >
        <div
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '24px',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Heart color="#A8D0B3" fill="#A8D0B3" />
            <span
              style={{
                fontSize: '20px',
                fontWeight: 600,
                fontFamily: 'Georgia, serif',
              }}
            >
              Гармония.
            </span>
          </div>
          <div style={{ display: 'flex', gap: '24px' }}>
            <a href="#" className="nav-link">
              Оферта
            </a>
            <a href="#" className="nav-link">
              Политика конфиденциальности
            </a>
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
