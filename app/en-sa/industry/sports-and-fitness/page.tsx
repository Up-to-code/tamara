import TamaraPage from '@/components/TamaraPage';
import header from '@/components/exact/en-sa-industry-sports-and-fitness-header.html';
import body from '@/components/exact/en-sa-industry-sports-and-fitness-body.html';
import footer from '@/components/exact/en-sa-industry-sports-and-fitness-footer.html';
import inline from '@/components/exact/en-sa-industry-sports-and-fitness.inline.txt';

export default function Page() {
  return <TamaraPage header={header} body={body} footer={footer} inline={inline} lang="en-SA" dir="ltr" />;
}
