import React from 'react';
import { LeadData } from '../types';
import { 
  User, Mail, Phone, Building2, Briefcase, DollarSign, 
  ShieldAlert, Zap, Activity
} from 'lucide-react';

interface SummaryProps {
  lead: LeadData;
}

export default function LeadSummary({ lead }: SummaryProps) {
  const safeLead = lead || {} as LeadData;
  const summaryFields = [
    { label: 'Nome Completo', value: safeLead.nome || 'Não informado', icon: User, color: 'text-[#008060]' },
    { label: 'WhatsApp', value: safeLead.whatsapp || safeLead.telefone || 'Não informado', icon: Phone, color: 'text-[#008060]' },
    { label: 'CPF', value: safeLead.cpf || 'Não informado', icon: Mail, color: 'text-[#008060]' },
    { label: 'CEP', value: safeLead.cep || 'Não informado', icon: Building2, color: 'text-[#14B8A6]' },
    { label: 'Endereço Completo', value: safeLead.endereco || 'Não informado', icon: Building2, color: 'text-[#14B8A6]' },
    { label: 'Instagram', value: safeLead.instagram || 'Não informado', icon: Briefcase, color: 'text-[#14B8A6]' },
    { label: 'Já Consome Cacau Puro?', value: safeLead.consumoCacau || 'Não informado', icon: Activity, color: 'text-[#008060]' },
    { label: 'Topa Compromisso (28 dias)?', value: safeLead.compromissoDesafio || 'Não informado', icon: Zap, color: 'text-[#008060]' },
  ];

  return (
    <div className="w-full text-left mt-6" id="lead-diagnostico-summary">
      <div className="flex items-center gap-2 mb-4 bg-[#14B8A6]/5 border border-[#14B8A6]/10 rounded-xl px-4 py-3">
        <Zap className="w-5 h-5 text-[#14B8A6] shrink-0 animate-pulse" />
        <p className="text-xs text-gray-700 tracking-wide leading-relaxed font-sans font-medium">
          Cadastro realizado com sucesso! Suas informações foram registradas para receber o cacau puro da Bahia.
        </p>
      </div>

      <div className="glass-panel rounded-2xl p-5 shadow-sm relative overflow-hidden bg-white border border-gray-200">
        
        <div className="flex items-center justify-between border-b border-gray-150 pb-3 mb-4">
          <h3 className="font-display font-medium text-xs tracking-widest text-gray-500 uppercase flex items-center gap-2">
            <img src="/logo-icon.png" alt="" className="w-4 h-4 object-contain" />
            <span>DIAGNÓSTICO E QUALIFICAÇÃO SERÁ CACAU</span>
          </h3>
          <span className="text-[10px] font-mono text-[#14B8A6] bg-[#14B8A6]/10 border border-[#14B8A6]/20 rounded px-2 py-0.5 font-bold">
            ANALISADO
          </span>
        </div>

        {/* Response Review Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-h-[340px] overflow-y-auto pr-1 scrollbar-thin">
          {summaryFields.map((field, idx) => {
            const IconComponent = field.icon;
            return (
              <div 
                key={idx} 
                className="flex items-start gap-3 bg-[#FAFAF8] border border-gray-150 hover:border-gray-250 rounded-xl p-3 transition-colors group"
                id={`summary-item-${idx}`}
              >
                <div className={`p-1.5 rounded-lg bg-white border border-gray-100 group-hover:bg-[#008060]/5 group-hover:border-[#008060]/20 transition-colors ${field.color}`}>
                  <IconComponent className="w-3.5 h-3.5" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-[9px] font-mono text-gray-400 uppercase tracking-wider mb-0.5">
                    {field.label}
                  </p>
                  <p className="text-xs font-sans font-semibold text-gray-900 truncate whitespace-normal leading-tight">
                    {field.value}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Compliance Footer */}
        <div className="flex items-center gap-2 mt-4 pt-3 border-t border-gray-150 text-[10px] font-mono text-[#14B8A6]">
          <ShieldAlert className="w-3.5 h-3.5 shrink-0" />
          <span>SISTEMA DE CONFORMIDADE ATIVO (LGPD)</span>
        </div>
      </div>
    </div>
  );
}
