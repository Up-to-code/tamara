import TamaraPage from '@/components/TamaraPage';
import header from '@/components/exact/en-sa-stores-9round-header.html';
import body from '@/components/exact/en-sa-stores-9round-body.html';
import footer from '@/components/exact/en-sa-stores-9round-footer.html';
import inline from '@/components/exact/en-sa-stores-9round.inline.txt';

export default function Page() {
  return <TamaraPage header={header} body={body} footer={footer} inline={inline} lang="en-SA" dir="ltr" />;
}
