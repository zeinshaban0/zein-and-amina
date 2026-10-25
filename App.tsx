import React, { useState } from 'react';
import { 
  ClipboardDocumentCheckIcon, 
  MagnifyingGlassIcon, 
  XMarkIcon,
  HomeIcon,
  DocumentTextIcon,
  Cog6ToothIcon
} from '@heroicons/react/24/outline';

interface SectionDetail {
  label: string;
  en: string;
  ar: string;
}

interface GridCard {
  id: string;
  icon: string;
  title: string;
  sheets: string;
  subtitle: string;
  fullWidth?: boolean;
  sections: SectionDetail[];
}

const CARDS_DATA: GridCard[] = [
  {
    id: 'history',
    icon: '📄',
    title: 'التاريخ المرضي والبيانات',
    sheets: 'أوراق A4 : 1 - 3',
    subtitle: 'Chief Complaint & History',
    sections: [
      {
        label: 'Chief Complaint (الشكوى الرئيسية)',
        en: "Severe sharp right lower quadrant abdominal pain for 24 hours associated with nausea, low-grade fever, and anorexia.",
        ar: "ألم حاد في الجانب السفلي الأيمن للبطن مستمر منذ 24 ساعة ومصحوب بغثيان، ارتفاع طفيف بالحرارة وفقدان شهية."
      },
      {
        label: 'Present Medical History (التاريخ المرضي الحالي)',
        en: "Symptoms started periumbilically then localized to RLQ (McBurney's point). Pain rated 8/10, worsening on movement.",
        ar: "بدأ الألم حول السرة ثم تركز في نقطة ماكبورني بالجانب الأيمن، بشدة 8/10 ويزداد مع الحركة."
      }
    ]
  },
  {
    id: 'exam',
    icon: '🩺',
    title: 'الفحص البدني والحيوي',
    sheets: 'أوراق A4 : 4 - 8',
    subtitle: 'Physical Exam & Vitals',
    sections: [
      {
        label: 'Vital Signs (العلامات الحيوية)',
        en: "BP: 125/80 mmHg | HR: 104 bpm (Tachycardia) | RR: 20 bpm | Temp: 38.3 °C (Oral).",
        ar: "الضغط: 125/80 | النبض: 104 دقيقة (تسارع) | التنفس: 20 دقيقة | الحرارة: 38.3 مئوية."
      },
      {
        label: 'Abdominal Assessment (فحص البطن)',
        en: "Rebound tenderness at McBurney's point, positive Rovsing's sign, localized abdominal guarding, hypoactive bowel sounds.",
        ar: "إيلام ارتدادي إيجابي في نقطة ماكبورني، علامة روفسينغ إيجابية، تحجر موضعي لجدار البطن، وضعف أصوات الأمعاء."
      }
    ]
  },
  {
    id: 'labs',
    icon: '🧪',
    title: 'التحاليل والأشعة',
    sheets: 'أوراق A4 : 9 - 11',
    subtitle: 'Investigations & Labs',
    sections: [
      {
        label: 'Laboratory Tests (التحاليل الطبية)',
        en: "CBC: WBC 14,800 /mm3 (Leukocytosis with Left Shift, Neutrophils 84%). CRP: 48 mg/L (Elevated).",
        ar: "صورة الدم: ارتفاع كرات الدم البيضاء لـ 14,800 مع زيادة العدلات. البروتين الالتهابي CRP مرتفع (48)."
      },
      {
        label: 'Imaging Studies (الأشعات)',
        en: "Pelvic-Abdominal US: Non-compressible, blind-ended tubular structure measuring 8.2 mm in diameter, periappendiceal fluid noted.",
        ar: "سونار البطن والحوض: ظهور زائدة دودية متضخمة بقطر 8.2 ملم غير قابلة للانضغاط مع تجمع سوائل موضعي."
      }
    ]
  },
  {
    id: 'meds',
    icon: '💊',
    title: 'الأدوية والمحاليل الوريدية',
    sheets: 'أوراق A4 : 12 - 13',
    subtitle: 'Meds & IV Fluids',
    sections: [
      {
        label: 'IV Antibiotics & Fluids (المحاليل والمضادات)',
        en: "1. Ceftriaxone 1g IV q12h.\n2. Metronidazole 500mg IV infusion q8h.\n3. Ringer's Lactate 1000ml IV at 125 ml/hr.",
        ar: "1. سفترياكسون 1 جم وريدي كل 12 ساعة.\n2. مترونيدازول 500 مجم تسريب وريدي كل 8 ساعات.\n3. محلول رينجر لاكتات 1000 مل بمعدل 125 مل/ساعة."
      },
      {
        label: 'Analgesia (مسكنات الألم)',
        en: "Ketorolac (Toradol) 30mg IV PRN q8h for acute pain score > 5.",
        ar: "كيتورولاك 30 مجم وريدي عند اللزوم إذا كانت درجة الألم أعلى من 5/10."
      }
    ]
  },
  {
    id: 'nanda',
    icon: '📋',
    title: 'خطة الرعاية التمريضية (NANDA)',
    sheets: 'أوراق A4 : 14 - 17',
    subtitle: 'Nursing Care Plan & Rationales',
    fullWidth: true,
    sections: [
      {
        label: 'Nursing Diagnosis (التشخيص التمريضي)',
        en: "Acute Pain related to biological injury agents (inflammation and distension of the appendix tissue) as evidenced by verbal report of 8/10 pain, guarding behavior, and tachycardia.",
        ar: "ألم حاد مرتبط بالتهاب وتمدد أنسجة الزائدة مثبت بتقرير المريض (8/10)، التحجر الوقائي، وتسارع ضربات القلب."
      },
      {
        label: 'Interventions & Rationales (الإجراءات والأساس العلمي)',
        en: "1. Maintain complete NPO status (Rationale: prepare for emergency surgery).\n2. Apply ice pack locally, avoid heat (Rationale: heat may cause appendix rupture).\n3. Administer prescribed IV fluids and analgesics.",
        ar: "1. منع الأكل والشرب نهائياً (NPO) تحضيراً للجراحة.\n2. استخدام كمادات باردة وتجنب الحرارة تماماً منعاً لانفجار الزائدة.\n3. إعطاء المحاليل والمسكنات الموصوفة وريدياً."
      }
    ]
  }
];

export default function App() {
  const [search, setSearch] = useState('');
  const [selectedCard, setSelectedCard] = useState<GridCard | null>(null);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const filteredCards = CARDS_DATA.filter(c => 
    c.title.includes(search) || 
    c.subtitle.toLowerCase().includes(search.toLowerCase()) ||
    c.sheets.includes(search)
  );

  const handleCopy = (card: GridCard, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    const text = card.sections.map(s => `[${s.label}]\n${s.en}`).join('\n\n');
    navigator.clipboard.writeText(text);
    setCopiedId(card.id);
    setTimeout(() => setCopiedId(null), 1800);
  };

  const handleCopySnippet = (text: string, e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(text);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans pb-24" dir="rtl">
      
      {/* الترويسة العلوية */}
      <header className="sticky top-0 z-30 bg-[#0D3B36] text-white px-4 py-3 shadow-md">
        <div className="max-w-md mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-emerald-800 text-amber-300 flex items-center justify-center font-bold text-xs border border-emerald-600">
              ZA
            </div>
            <div>
              <h1 className="text-sm font-extrabold flex items-center gap-1.5">
                زين وأمينة
              </h1>
              <p className="text-[10px] text-emerald-200">مساعدك الذكي في دراسة التمريض</p>
            </div>
          </div>
          <span className="text-[10px] bg-emerald-700/80 text-emerald-100 px-2.5 py-0.5 rounded-full border border-emerald-500/50">
            جاهز للنقل
          </span>
        </div>
      </header>

      {/* المحتوى الرئيسي */}
      <main className="max-w-md mx-auto px-4 pt-3 space-y-3">
        
        {/* شريط البحث */}
        <div className="relative">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="البحث في أوراق الشيت..."
            className="w-full bg-white border border-slate-200 rounded-xl py-2 pr-9 pl-4 text-xs text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#107C68] shadow-sm"
          />
          <MagnifyingGlassIcon className="w-4 h-4 text-slate-400 absolute right-3 top-2.5" />
        </div>

        <p className="text-[11px] font-bold text-slate-700 pt-1">
          اختر القسم المطلوب (أوراق الشيت):
        </p>

        {/* شبكة المربعات (Grid Dashboard) */}
        <div className="grid grid-cols-2 gap-2.5">
          {filteredCards.map((card) => {
            const isFull = card.fullWidth;
            return (
              <div
                key={card.id}
                onClick={() => setSelectedCard(card)}
                className={`bg-white rounded-2xl border border-slate-200 p-3 shadow-sm hover:shadow-md transition-all cursor-pointer flex flex-col justify-between ${
                  isFull ? 'col-span-2' : 'col-span-1'
                }`}
              >
                <div className="text-center space-y-1">
                  <div className="text-xl mb-0.5">{card.icon}</div>
                  <h3 className="text-xs font-black text-slate-800 leading-tight">
                    {card.title}
                  </h3>
                  <div className="text-[10px] font-bold text-[#107C68] bg-emerald-50 py-0.5 px-2 rounded-md inline-block">
                    {card.sheets}
                  </div>
                  <p className="text-[9px] text-slate-400 font-mono">
                    {card.subtitle}
                  </p>
                </div>

                <div className="pt-2.5 mt-2 border-t border-slate-100">
                  <button
                    onClick={(e) => handleCopy(card, e)}
                    className={`w-full py-1.5 px-2 rounded-xl text-[11px] font-bold flex items-center justify-center gap-1 transition-all ${
                      copiedId === card.id
                        ? 'bg-emerald-600 text-white'
                        : isFull
                        ? 'bg-[#0D3B36] text-white hover:bg-[#107C68]'
                        : 'bg-emerald-50 text-[#0D3B36] hover:bg-emerald-100'
                    }`}
                  >
                    <ClipboardDocumentCheckIcon className="w-3.5 h-3.5" />
                    <span>
                      {copiedId === card.id 
                        ? '✓ تم النسخ' 
                        : isFull 
                        ? 'عرض التفاصيل والنسخ 📋' 
                        : 'نسخ سريع 📋'}
                    </span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </main>

      {/* نافذة منبثقة لعرض وقراءة تفاصيل كل مربع عند النقر عليه (Modal) */}
      {selectedCard && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-end sm:items-center justify-center p-0 sm:p-4">
          <div className="bg-white w-full max-w-md max-h-[85vh] rounded-t-3xl sm:rounded-2xl flex flex-col shadow-2xl overflow-hidden animate-in fade-in">
            
            {/* رأس النافذة */}
            <div className="px-4 py-3 bg-slate-50 border-b border-slate-200 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-xl">{selectedCard.icon}</span>
                <div>
                  <h3 className="text-xs font-black text-slate-800">{selectedCard.title}</h3>
                  <span className="text-[10px] text-[#107C68] font-bold">{selectedCard.sheets}</span>
                </div>
              </div>
              <button 
                onClick={() => setSelectedCard(null)}
                className="w-7 h-7 rounded-full bg-slate-200 text-slate-600 flex items-center justify-center hover:bg-slate-300"
              >
                <XMarkIcon className="w-4 h-4" />
              </button>
            </div>

            {/* محتوى النافذة */}
            <div className="p-4 overflow-y-auto space-y-3.5 flex-1 text-right">
              {selectedCard.sections.map((sec, idx) => (
                <div key={idx} className="bg-slate-50 border border-slate-200 rounded-xl p-3 space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-bold text-[#0D3B36]">{sec.label}</span>
                    <button
                      onClick={(e) => handleCopySnippet(sec.en, e)}
                      className="text-[10px] bg-white border border-slate-300 px-2 py-0.5 rounded-lg text-slate-700 hover:bg-emerald-50 hover:text-[#107C68]"
                    >
                      نسخ
                    </button>
                  </div>
                  <div className="bg-slate-900 text-emerald-300 p-2.5 rounded-lg text-xs font-mono text-left leading-relaxed" dir="ltr">
                    {sec.en}
                  </div>
                  <p className="text-[11px] text-slate-600 leading-relaxed pt-0.5">
                    {sec.ar}
                  </p>
                </div>
              ))}
            </div>

            {/* زر سفلي للنسخ بالكامل والإغلاق */}
            <div className="p-3 bg-white border-t border-slate-100 flex gap-2">
              <button
                onClick={() => handleCopy(selectedCard)}
                className="flex-1 py-2 rounded-xl bg-[#107C68] text-white text-xs font-bold shadow hover:bg-[#0D3B36]"
              >
                {copiedId === selectedCard.id ? '✓ تم نسخ القسم بالكامل' : '📋 نسخ محتوى القسم بالكامل'}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* الشريط السفلي الثابت (Navigation Bar) */}
      <footer className="fixed bottom-0 left-0 right-0 z-20 bg-white/95 backdrop-blur border-t border-slate-200 py-2 shadow-lg">
        <div className="max-w-md mx-auto grid grid-cols-3 text-center">
          <button className="flex flex-col items-center text-[#107C68]">
            <HomeIcon className="w-5 h-5" />
            <span className="text-[10px] font-bold mt-0.5">الرئيسية</span>
          </button>
          <button className="flex flex-col items-center text-slate-400 hover:text-slate-700">
            <DocumentTextIcon className="w-5 h-5" />
            <span className="text-[10px] font-bold mt-0.5">الشيت</span>
          </button>
          <button className="flex flex-col items-center text-slate-400 hover:text-slate-700">
            <Cog6ToothIcon className="w-5 h-5" />
            <span className="text-[10px] font-bold mt-0.5">الإعدادات</span>
          </button>
        </div>
      </footer>

    </div>
  );
}
