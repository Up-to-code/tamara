import TamaraPage from '@/components/TamaraPage';
import header from '@/components/exact/ar-sa-stores-fitnesstime-header.html';
import body from '@/components/exact/ar-sa-stores-fitnesstime-body.html';
import footer from '@/components/exact/ar-sa-stores-fitnesstime-footer.html';
import inline from '@/components/exact/ar-sa-stores-fitnesstime.inline.txt';

export default function Page() {
  return <TamaraPage header={header} body={body} footer={footer} inline={inline} lang="ar-SA" dir="rtl" />;
}
