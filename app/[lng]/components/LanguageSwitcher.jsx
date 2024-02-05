import Link from 'next/link';
import { languages } from '../../i18n/settings';
import { Globe } from 'lucide-react';

export default function LanguageSwitcher({ lng }) {
  return (
    <div>
      <div className="flex items-center cursor-pointer text-white">
        {languages
          .filter((l) => lng !== l)
          .map((l, index) => {
            return (
              <span key={l}>
                {index > 0 && ' or '}

                <Link href={`/${l}`} className="flex uppercase">
                  {l} <Globe size={20} className="mx-1" />
                </Link>
              </span>
            );
          })}
      </div>
    </div>
  );
}
